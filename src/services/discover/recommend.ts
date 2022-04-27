import { request } from "@/utils";
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
