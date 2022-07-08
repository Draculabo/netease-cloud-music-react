import { getArtistList } from "@/services";
import { useRequest } from "ahooks";
import { Skeleton } from "antd";
import { memo } from "react";
import { DiscoverSidebarLayout } from "@/layouts/SidebarLayout";
import { ApplicationButton, RecommendSingerWrapper, SingerItem } from "./style";
export const RecommendSinger = memo(() => {
    const { data, loading } = useRequest<any, any>(() => getArtistList());
    return (
        <DiscoverSidebarLayout title="入驻歌手" allLink>
            {loading ? (
                <Skeleton loading />
            ) : (
                <RecommendSingerWrapper>
                    {data.artists.map(a => {
                        return (
                            <SingerItem key={a.id}>
                                <img src={a.img1v1Url} alt="" className="avatar" />
                                <div className="info">
                                    <h4>{a.name}</h4>
                                    <p className="alias">{a.alias.length && a.alias[0]}</p>
                                </div>
                            </SingerItem>
                        );
                    })}
                    <ApplicationButton>
                        <i>申请成为网易音乐人</i>
                    </ApplicationButton>
                </RecommendSingerWrapper>
            )}
        </DiscoverSidebarLayout>
    );
});
