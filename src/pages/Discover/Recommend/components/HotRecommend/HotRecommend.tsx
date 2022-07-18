import { MusicItem } from "@/components";
import { HotRecommendContentLoader } from "@/components/CustomizeContentLoader";
import { DiscoverModuleLayout } from "@/layouts";
import { getRecommendList } from "@/services/discover/recommend";
import { useRequest } from "ahooks";
import { memo, useMemo } from "react";
import { HotList } from "./style";
export const HotRecommend = memo(() => {
    const categories = useMemo(() => {
        return ["华语", "流行", "摇滚", "民谣", "电子"];
    }, []);
    const { data: list, loading } = useRequest<any[], any>(() => {
        return getRecommendList(8);
    });
    return (
        <DiscoverModuleLayout title="热门推荐" tabList={categories}>
            {loading ? (
                <HotRecommendContentLoader />
            ) : (
                <HotList>
                    {list?.map(p => (
                        <MusicItem key={p.id} rc={p} />
                    ))}
                </HotList>
            )}
        </DiscoverModuleLayout>
    );
});
