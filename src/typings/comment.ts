export interface ICommentListSearchParams {
    id: number;
    type: CommentType;
    sortType?: number;
    pageSize?: number;
    pageNo?: number;
    cursor?: string | undefined;
}

/**
 * 评论参数类型
 */
export enum CommentType {
    Song,
    MV,
    PlayList,
    Album,
    Radio,
    Video,
    Explore,
}
