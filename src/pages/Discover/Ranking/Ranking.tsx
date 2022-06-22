import { getPlayListDetail, getTopList } from "@/services";
import { splitArray, useDispatch } from "@/utils";
import { useRequest } from "ahooks";
import { Skeleton } from "antd";
import { runMain } from "module";
import { memo, useEffect, useState } from "react";
import { useParams } from "react-router";
import { RankingInformation, RankingTable } from "./components";
import { RankingLeft } from "./components/RankingLeft";
import { RankingRightWrapper, RankingWrapper } from "./style";

const Ranking = memo(() => {
    const [playList, setPlayList] = useState<any>(null);
    const [rankingInfo, _] = useState<any>(null);
    const { id = "19723756" } = useParams();
    const { loading: rankingLoading, run: rankingDetailRun } = useRequest<any, any>(
        () => getPlayListDetail(id),
        {
            onSuccess(res) {
                if (!res) {
                    return;
                }

                console.log(res.playlist);
                setPlayList(res.playlist);
            },
        },
    );

    useEffect(() => {
        rankingDetailRun();
    }, [id]);
    if (rankingLoading) {
        return <Skeleton loading />;
    }
    return (
        <RankingWrapper className="wrap-v2">
            <RankingLeft />
            <RankingRightWrapper>
                <RankingInformation updateStr={rankingInfo?.updateFrequency} info={playList} />
                <RankingTable
                    playCount={playList.playCount}
                    trackCount={playList.trackCount}
                    list={playList.tracks}
                />
            </RankingRightWrapper>
        </RankingWrapper>
    );
});
export default Ranking;
