import { DiscoverModuleLayout } from "@/layouts";
import { getTopList } from "@/services";
import { useRequest } from "ahooks";
import { Skeleton } from "antd";
import { memo, useState } from "react";
import { DiscoverRankingList } from "./DiscoverRankingList";
import { RankingWrapper } from "./style";
export const Ranking: React.MemoExoticComponent<() => JSX.Element> = memo(() => {
    const [idList, setIdList] = useState<any[]>([]);
    useRequest<any, any>(getTopList, {
        onSuccess(res) {
            const condition = ["飙升榜", "原创榜", "新歌榜"];
            const data = res?.list?.filter(value => condition.includes(value.name));
            setIdList(data);
        },
    });
    return (
        <DiscoverModuleLayout title="榜单">
            {idList?.length !== 3 ? (
                <Skeleton loading />
            ) : (
                <RankingWrapper>
                    {idList?.map(ranking => {
                        return (
                            <DiscoverRankingList
                                key={ranking.id}
                                title={ranking.name}
                                id={ranking.id}
                            />
                        );
                    })}
                </RankingWrapper>
            )}
        </DiscoverModuleLayout>
    );
});
