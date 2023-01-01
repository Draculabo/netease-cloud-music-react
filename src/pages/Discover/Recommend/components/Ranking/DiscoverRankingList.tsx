import { getPlayListDetail } from "@/services";
import { usePlayMusic } from "@/utils/hooks";
import useAddPlayList from "@/utils/hooks/useAddPlayList";
import { useRequest } from "ahooks";
import { Skeleton } from "@/components";
import { memo, useState } from "react";
import { Link } from "react-router-dom";
import { RankingListBottom, RankingListTop, RankingListWrapper } from "./style";

interface RankingListProps {
    title: string;
    id: string;
}

export const DiscoverRankingList = memo<RankingListProps>(({ id }) => {
    const [playList, setPlayList] = useState<any[]>([]);
    const { data, loading } = useRequest<any, any>(() => getPlayListDetail(id), {
        onSuccess(data) {
            setPlayList(data?.playlist?.tracks?.slice(0, 10));
        },
    });
    const playMusic = usePlayMusic();
    const { addPlayList, replacePlayList } = useAddPlayList();
    if (loading) {
        return <Skeleton loading />;
    }

    return (
        <RankingListWrapper>
            <RankingListTop>
                <div className="mask">
                    <img src={data?.playlist.coverImgUrl} alt="" />
                    <Link className="mask-cover" to={`/discover/chart/${data?.playlist.id}`} />
                </div>
                <div className="ranking-right">
                    <Link className="ranking-link" to={`/discover/chart/${data?.playlist.id}`}>
                        {data?.playlist.name}
                    </Link>

                    <div className="list-bottom">
                        <span
                            className="ranking-play"
                            onClick={() => {
                                replacePlayList(data?.playlist.id);
                            }}
                        />
                        <span className="ranking-collect" />
                    </div>
                </div>
            </RankingListTop>
            <RankingListBottom>
                {playList?.map((m, index) => (
                    <div className="ranking-item" key={m.id}>
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
                                {m.name}
                            </a>
                        </div>
                        <div className="operate">
                            <span
                                className="playing"
                                onClick={() => {
                                    replacePlayList({
                                        id: m.id,
                                        name: m.name,
                                        author: m.ar,
                                        duration: m.dt,
                                    });
                                }}
                            />
                            <span
                                className="add-playlist"
                                onClick={() => {
                                    addPlayList({
                                        id: m.id,
                                        name: m.name,
                                        author: m.ar,
                                        duration: m.dt,
                                    });
                                }}
                            />
                            <span className="collect" />
                        </div>
                    </div>
                ))}
            </RankingListBottom>
            <a className="more">查看更多{">"}</a>
        </RankingListWrapper>
    );
});
