import { formatToYMS } from "@/utils";
import { linkToUserHomePage } from "@/utils/link";
import { take } from "lodash";
import { memo } from "react";
import { Link } from "react-router-dom";
import { CommentListWrapper } from "./CommentList.style";
import CommentListSkeleton from "./CommentListSkeleton";
export interface CreatorType {
    userId: number;
    nickname: string;
    avatarUrl?: string;
}
export interface CommentType {
    commentId: number;
    content: string;
    likedCount: number;
    replyCount: number;
    time: number;
    user: CreatorType;
    [propName: string]: any;
}

type CommentListPropsType = {
    title: string;
    isHot: boolean;
    commentList: CommentType[] | undefined;
};

const CommentList = memo((props: CommentListPropsType) => {
    const comments: CommentType[] = props.isHot
        ? take(props?.commentList, 15)
        : props?.commentList || [];

    return (
        <CommentListWrapper>
            <div className="comment-list-title">
                <h3 className="font-bold">{props.title}</h3>
            </div>
            <div className="comment-list">
                {comments.length === 0 ? (
                    <CommentListSkeleton />
                ) : (
                    comments?.map(comment => {
                        return (
                            <div className="comment-item" key={comment.commentId}>
                                <div
                                    className="avatarUrl"
                                    style={{ backgroundImage: `url(${comment.user.avatarUrl})` }}
                                >
                                    <Link
                                        className="block-a"
                                        to={linkToUserHomePage(comment.user.userId)}
                                    />
                                </div>
                                <div className="content-field">
                                    <div className="name-content">
                                        <Link to={linkToUserHomePage(comment.user.userId)}>
                                            {comment.user.nickname}
                                        </Link>
                                        ： {comment.content}
                                    </div>

                                    <div className="meta-data">
                                        <div className="date">{formatToYMS(comment.time)}</div>
                                        <div className="thumb-replay">
                                            <div className="thumb-icon" />
                                            <div className="thumb-count">
                                                ({comment.likedCount})
                                            </div>
                                            <div className="split">|</div>
                                            <div className="replay">回复</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                )}
            </div>
        </CommentListWrapper>
    );
});

export default CommentList;
