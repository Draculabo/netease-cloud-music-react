import CommentList from "@/components/CommentList/CommentList";
import { getComment, getPlayListDetail } from "@/services";
import { useRequest } from "ahooks";
import { Skeleton } from "antd";
import { memo, useEffect } from "react";
import { useParams } from "react-router";
import { PlaylistTable, RankingInformation } from "./components";
import { RankingLeft } from "./components/RankingLeft";
import { RankingRightWrapper, RankingWrapper } from "./style";
import { CommentType } from "@/typings";

const Ranking = memo(() => {
    const { id = "19723756" } = useParams();
    const {
        data: res,
        loading: rankingLoading,
        run: rankingDetailRun,
    } = useRequest<any, any>(() => getPlayListDetail(id), {
        retryCount: 3,
        retryInterval: 3000,
        cacheKey: `playlist-detail-${id}`,
    });
    const { data: commentData, run: commentRun } = useRequest(() =>
        getComment({ type: CommentType.PlayList, id: parseInt(id) }),
    );
    useEffect(() => {
        rankingDetailRun();
        commentRun();
    }, [id]);
    return (
        <RankingWrapper className="wrap-v2">
            <RankingLeft />
            <RankingRightWrapper>
                <>
                    {rankingLoading ? (
                        <Skeleton loading />
                    ) : (
                        <>
                            <RankingInformation info={res?.playlist} />
                            <PlaylistTable
                                playCount={res?.playlist?.playCount}
                                trackCount={res?.playlist?.trackCount}
                                list={res?.playlist?.tracks}
                            />
                        </>
                    )}
                    <CommentList
                        title="精彩评论"
                        isHot={false}
                        commentList={commentData?.comments}
                    />
                </>
            </RankingRightWrapper>
        </RankingWrapper>
    );
});
export default Ranking;
