import React, { useState } from "react";
import { CommentList, DownloadTip, Pagination, SectionTitle, UserAvatarList } from "@/components";
import PlaylistBaseInfo from "./PlaylistBaseInfo";
// import "./index.scss";
import { useRequest } from "ahooks";
import { getComment, getPlayListDetail } from "@/services";
import { useNavigate, useParams } from "react-router";
import { COMMENT_PAGE_LIST } from "@/configs/httpSetting";
import { CommentType } from "@/typings";
import { PlaylistTable } from "@/components/PlaylistTable";
import { PlaylistDetailContainer } from "./PlaylistDetail.style";

const PlaylistDetail = () => {
    const [pageNo, setPageNo] = useState(1);
    const [cursor, setCursor] = useState<string | undefined>(undefined);
    const params = useParams();
    const navigate = useNavigate();
    if (!params.id) {
        navigate("*");
        return null;
    }
    const id = parseInt(params.id);
    const { data: playDetail } = useRequest<any, any>(() => getPlayListDetail(id + ""), {
        retryCount: 3,
        retryInterval: 3000,
        cacheKey: `playlist-detail-${id}`,
    });
    // 评论相关
    // 热门评论
    const { data: hotCommentData } = useRequest<any, any>(
        () => getComment({ id: id, type: CommentType.PlayList, pageSize: COMMENT_PAGE_LIST }),
        {
            cacheKey: "hot-comment",
        },
    );
    // 全部评论，时间排序
    const { data: newCommentData } = useRequest<any, any>(
        () =>
            getComment({
                id,
                type: 2,
                sortType: 3,
                pageNo,
                pageSize: COMMENT_PAGE_LIST,
                cursor,
            }),
        {
            cacheKey: "all-comment",
        },
    );
    const newCommentPageChangeHandler = (pageNo: number) => {
        setCursor(newCommentData?.data.cursor);
        setPageNo(pageNo);
    };

    return (
        <PlaylistDetailContainer className="wrap-v2">
            <div className="left-field">
                <PlaylistBaseInfo playlistBaseInfo={playDetail?.playlist} />
                <PlaylistTable
                    list={playDetail?.playlist?.tracks}
                    trackCount={playDetail?.playlist?.trackCount}
                    playCount={playDetail?.playlist?.playDetail}
                />
                {/*{playlistLoading ? (*/}
                {/*    <Skeleton loading />*/}
                {/*) : (*/}
                {/*    <>*/}
                {/*        <PlaylistBaseInfo playlistBaseInfo={playDetail?.playlist} />*/}
                {/*        <PlaylistTable*/}
                {/*            list={playDetail?.playlist?.tracks}*/}
                {/*            trackCount={playDetail?.playlist?.trackCount}*/}
                {/*            playCount={playDetail?.playlist?.playDetail}*/}
                {/*        />*/}
                {/*    </>*/}
                {/*)}*/}
                <DownloadTip />
                <CommentList
                    title="精彩评论"
                    isHot={true}
                    commentList={hotCommentData?.data?.comments || []}
                />
                <CommentList
                    title={`最新评论(${playDetail?.playlist?.commentCount || 0})`}
                    isHot={false}
                    commentList={newCommentData?.data?.comments || []}
                />
                <Pagination
                    total={newCommentData?.data?.totalCount || 0}
                    pageLimit={COMMENT_PAGE_LIST}
                    offset={(pageNo - 1) * COMMENT_PAGE_LIST}
                    pageChangeHandler={newCommentPageChangeHandler}
                />
            </div>
            <div className="right-field">
                <SectionTitle title="喜欢这个歌单的人" />
                <UserAvatarList subscribers={playDetail?.playlist.subscribers} />
                {/* <SectionTitle title="热门歌单"></SectionTitle> */}
            </div>
        </PlaylistDetailContainer>
    );
};

export default PlaylistDetail;
