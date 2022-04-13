import { memo, useEffect, useMemo, useRef } from "react";
import { HeaderLeft, HotHeader, HotList, HotRecommendWrapper } from "./styles";
import { useRequest } from "ahooks";
import { MusicItem } from "@/components";
import { getRecommendList } from "@/services/hotRecommend";
export const HotRecommend: React.MemoExoticComponent<() => JSX.Element> = memo(() => {
    const catagories = useMemo(() => {
        return ["华语", "流行", "摇滚", "民谣", "电子"];
    }, []);
    const { data } = useRequest<any, any>(() => {
        return getRecommendList(8);
    });

    return (
        <HotRecommendWrapper className="wrap-v2">
            <HotHeader>
                <HeaderLeft>
                    <a href="" className="hc-header">
                        热门推荐
                    </a>
                    <div className="hc-tab">
                        {catagories.map((c, i) => {
                            return (
                                <a href="" key={i}>
                                    {c}
                                </a>
                            );
                        })}
                    </div>
                </HeaderLeft>
                <a className="hc-more" href="">
                    更多
                </a>
            </HotHeader>
            <HotList>{data && data.result.map(p => <MusicItem key={p.id} rc={p} />)}</HotList>
        </HotRecommendWrapper>
    );
});
