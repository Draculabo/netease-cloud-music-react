import { RecommendSingerContentLoader } from "@/components/CustomizeContentLoader";
import { DiscoverSidebarLayout } from "@/layouts/SidebarLayout";
import { getArtistList } from "@/services";
import { useRequest } from "ahooks";
import { memo } from "react";
import { ApplicationButton, RecommendSingerWrapper, SingerItem } from "./style";
export const RecommendSinger = memo(() => {
    const { data: artists, loading } = useRequest<any[], any>(() => getArtistList());
    return (
        <DiscoverSidebarLayout title="入驻歌手" allLink>
            {loading ? (
                <RecommendSingerContentLoader />
            ) : (
                <RecommendSingerWrapper>
                    {artists?.map(a => {
                        return (
                            <SingerItem key={a.id}>
                                <img src={a.img1v1Url} alt="" className="avatar" />
                                <div className="info">
                                    <h4>{a.name}</h4>
                                    <p className="alias text-nowrap">
                                        {a.alias?.length && a.alias?.join("/")}
                                    </p>
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
