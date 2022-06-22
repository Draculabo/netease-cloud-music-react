import { request } from "@/utils";
/**
 * 获取所有榜单
 * @returns 榜单列表
 */
export function getTopList() {
    return request({
        url: "/toplist",
        method: "get",
    });
}
