import { memo, useMemo } from "react";
import { HotList } from "./style";
import { useRequest } from "ahooks";
import { MusicItem } from "@/components";
import { getRecommendList } from "@/services/discover/recommend";
import { DiscoverModuleLayout } from "@/layouts";
export const HotRecommend: React.MemoExoticComponent<() => JSX.Element> = memo(() => {
    const categories = useMemo(() => {
        return ["华语", "流行", "摇滚", "民谣", "电子"];
    }, []);
    const { data } = useRequest<any, any>(() => {
        return getRecommendList(8);
    });
    return (
        <DiscoverModuleLayout title="热门推荐" tabList={categories}>
            <HotList>{data && data.result.map(p => <MusicItem key={p.id} rc={p} />)}</HotList>
        </DiscoverModuleLayout>
    );
});
