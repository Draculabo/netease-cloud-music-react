import { request } from "@/utils";
/**
 * 获取音乐url
 * @returns 音乐url
 */
export function getMusicUrl({ id }: { id: number }) {
    return request({
        url: "/song/url",
        method: "get",
        params: {
            id,
        },
    });
}
/**
 * 获取音乐详情
 * @returns 音乐详情
 */
export function getMusicDetail({ id }: { id: number }) {
    return request({
        url: "/song/detail",
        method: "get",
        params: {
            ids: id,
        },
    });
}
/**
 * 获取歌词
 * @param param 歌词参数
 * @returns 歌词
 */
export function getlyric({ id }: { id: number }) {
    return request({
        url: "/lyric",
        method: "get",
        params: {
            id,
        },
    });
}
