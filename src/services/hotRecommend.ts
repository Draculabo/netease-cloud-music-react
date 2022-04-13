import { request } from "@/utils";
/**
 * 获取推荐歌单
 * @param limit 请求条数
 * @returns  数据
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
