import { request } from "@/utils";
import { CommentType } from "./type";

/**
 * 获取评论
 * @param param 评论参数
 * id : 资源 id, 如歌曲 id,mv id
 * type: 数字 , 资源类型 , 对应歌曲 , mv, 专辑 , 歌单 , 电台, 视频对应以下类型
 * @returns 评论
 */
export function getComment({ id, type }: { id: number; type: CommentType }) {
    return request({
        url: "/comment/new",
        method: "get",
        params: {
            id,
            type,
        },
    })
        .then(res => res.data)
        .catch(err => {
            throw new Error(err);
        });
}
