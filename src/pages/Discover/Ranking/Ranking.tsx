import { getPlayListDetail } from "@/services";
import { useRequest } from "ahooks";
import { Skeleton } from "antd";
import { memo, useEffect, useState } from "react";
import { useParams } from "react-router";
import { RankingInformation, RankingTable } from "./components";
import { RankingLeft } from "./components/RankingLeft";
import { RankingRightWrapper, RankingWrapper } from "./style";

const Ranking = memo(() => {
    const [playList, setPlayList] = useState<any>(null);
    const { id = "19723756" } = useParams();
    const { loading: rankingLoading, run: rankingDetailRun } = useRequest<any, any>(
        () => getPlayListDetail(id),
        {
            onSuccess(res) {
                setPlayList(res?.playlist);
            },
            retryCount: 3,
            retryInterval: 3000,
        },
    );

    useEffect(() => {
        rankingDetailRun();
    }, [id]);

    return (
        <RankingWrapper className="wrap-v2">
            <RankingLeft />
            <RankingRightWrapper>
                {rankingLoading ? (
                    <Skeleton loading />
                ) : (
                    <>
                        <RankingInformation info={playList} />
                        <RankingTable
                            playCount={playList?.playCount}
                            trackCount={playList?.trackCount}
                            list={playList?.tracks}
                        />
                    </>
                )}
            </RankingRightWrapper>
        </RankingWrapper>
    );
});
export default Ranking;
