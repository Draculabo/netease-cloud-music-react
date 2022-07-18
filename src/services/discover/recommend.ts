import { request } from "@/utils";
import { defaultMsg, errorMsg } from "@/utils/message";
/**
 * * 获取推荐歌单
 * @param limit 请求条数
 * @returns  Promise数据对象
 */
export function getRecommendList(limit?: number) {
    return request({
        url: "/personalized",
        method: "get",
        params: {
            limit,
        },
    })
        .then((res: any) => res.result)
        .catch(err => {
            throw new Error(err);
        });
}
/**
 * 获取新歌列表
 * @param limit 列表长度
 * @param area 地区
 * @returns  Promise数据对象
 */
export function getTopAlbum(limit = 10, area?: string) {
    return request({
        url: "/top/album",
        method: "get",
        params: {
            limit,
            area: area,
        },
    });
}
/**
 * 获取所有榜单
 * @returns  Promise数据对象
 */
export function getTopList() {
    return request({
        url: "/toplist",
        method: "get",
        params: {},
    });
}
/**
 * 获取歌单详情
 * @param id  歌单id
 * @param s 歌单最近的 s 个收藏者,默认为 8
 * @returns  Promise数据对象
 */
export function getPlayListDetail(id: string, s?: number) {
    return request({
        url: "/playlist/detail",
        method: "get",
        params: {
            id,
            s,
        },
    });
}
/**
 * 获取歌手分类列表
 * @param offset 偏移数量，用于分页 , 如 : 如 :( 页数 -1)*30, 其中 30 为 limit 的值
 * @param limit 返回数量 , 默认为 30
 * @returns
 */
export function getArtistList(offset = 0, limit = 5) {
    return request({
        url: "/artist/list",
        method: "get",
        params: {
            offset,
            limit,
        },
    });
}

/**
 * 获取首页轮播图
 */
export function getBanners() {
    return request({
        url: "/banner",
        method: "get",
    })
        .then((res: any) => res.banners)
        .catch(() => defaultMsg(errorMsg.networkError));
}
