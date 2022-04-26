import { getPlayListDetail } from "@/services";
import { useRequest } from "ahooks";
import { Skeleton } from "antd";
import { memo, useState } from "react";
import { RankingListBottom, RankingListTop, RankingListWrapper } from "./styles";
interface RankingListProps {
    title: string;
    id: string;
}
export const RankingList = memo<RankingListProps>(({ id }) => {
    const [playList, setPlayList] = useState<any[]>([]);
    const { data, loading } = useRequest<any, any>(() => getPlayListDetail(id), {
        onSuccess(data) {
            setPlayList(data.playlist.tracks.slice(0, 10));
        },
    });
    if (loading) {
        return <Skeleton loading />;
    }

    return (
        <RankingListWrapper>
            <RankingListTop>
                <div className="mask">
                    <img src={data.playlist.coverImgUrl} alt="" />
                    <a href="" className="mask-cover" />
                </div>
                <div className="ranking-right">
                    <a href="" className="ranking-link">
                        {data.playlist.name}
                    </a>
                    <div className="list-bottom">
                        <a href="" className="ranking-play"></a>
                        <a href="" className="ranking-collect"></a>
                    </div>
                </div>
            </RankingListTop>
            <RankingListBottom>
                {playList.map((value, index) => (
                    <div className="ranking-item" key={value.id}>
                        <div className="item-left">
                            <span
                                className={
                                    index < 3
                                        ? "ranking-top ranking-identifier"
                                        : "ranking-identifier"
                                }
                            >
                                {index + 1}
                            </span>
                            <a href="" className="item-link">
                                {value.name}
                            </a>
                        </div>
                        <div className="operate">
                            <a href="#" className="playing" />
                            <a href="#" className="add-playlist" />
                            <a href="#" className="collect"></a>
                        </div>
                    </div>
                ))}
            </RankingListBottom>
            <a className="more">查看更多{">"}</a>
        </RankingListWrapper>
    );
});
