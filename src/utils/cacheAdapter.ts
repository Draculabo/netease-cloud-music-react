import { AxiosAdapter, AxiosPromise, AxiosRequestConfig } from "axios";

/**
 * 生成唯一请求Id
 * @param config axios配置对象
 * @returns 唯一请求Id
 */
export function generateUniqueKey(config) {
    const { url, method, params, data } = config;

    return [url, method, JSON.stringify(params), JSON.stringify(data)].join("&");
}
interface CacheValue {
    value: AxiosPromise;
    expire: number;
    now: number;
}
interface CacheData {
    [key: string]: CacheValue;
}
interface CacheAdapter {
    data: CacheData;
    set: (key, value, expire) => void;
    get: (key) => AxiosPromise | null;
    delete: (key) => boolean;
    clear: () => void;
}
const MemoryCache: CacheAdapter = {
    data: {},
    /**
     * 设置缓存
     * @param key 键名
     * @param value 键值
     * @param expire 过期时间
     */
    set(key: string, value, expire: number) {
        this.data[key] = {
            expire: expire ?? 0,
            value,
            now: Date.now(),
        };
    },
    /**
     * 根据键名获取缓存
     * @param key 键名
     * @returns 缓存
     */
    get(key: string) {
        const item = this.data[key];
        // 如果缓存不存在 或者 缓存已过期
        if (item === undefined || item === null) {
            return null;
        }
        // 如果缓存已经过期
        if (item.expire + item.now < Date.now()) {
            this.delete(key);
            return null;
        }
        return item.value;
    },
    /**
     * 删除键名所对应的缓存
     * @param key 键名
     * @returns 是否成功删除缓存
     */
    delete(key: string) {
        return delete this.data[key];
    },
    /**
     * 清空缓存
     */
    clear() {
        this.data = {};
    },
};
interface CacheAdapterOptions {
    expire?: number;
    cache?: boolean;
    cacheAdapter?: CacheAdapter;
}
export function cacheAdapterEnhancer(adapter: AxiosAdapter, options: CacheAdapterOptions) {
    const { expire = 3000, cache = true, cacheAdapter = MemoryCache } = options;
    return (config: AxiosRequestConfig): AxiosPromise => {
        const { method } = config;
        // 如果启用了缓存 且请求方法为get 或者 head
        if (cache && (method === "get" || method === "head")) {
            // 生成唯一请求key
            const cacheKey = generateUniqueKey(config);
            // 获取缓存对象
            const cache = options.cacheAdapter ?? cacheAdapter;
            // 获取缓存值
            let value = cache.get(cacheKey);

            // 如果值不存在 则获取
            if (!value) {
                value = (async () => {
                    try {
                        return await adapter(config);
                    } catch (err: any) {
                        cache.delete(cacheKey);
                        throw new Error(err);
                    }
                })();
                cache.set(cacheKey, value, expire);
                return value;
            }
            return value;
        }
        return adapter(config);
    };
}
