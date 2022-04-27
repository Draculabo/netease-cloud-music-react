import { memo } from "react";
import { DiscoverSidebarLayout } from "../../layouts/SidebarLayout";
import { AnchorItem, AnchorWrapper } from "./style";
import { anchorData } from "@/configs/localData";
export const HotAnchor = memo(() => {
    return (
        <DiscoverSidebarLayout title="热门主播" allLink={false}>
            <AnchorWrapper>
                {anchorData.map((a, i) => {
                    return (
                        <AnchorItem key={i} href={a.url}>
                            <img src={a.picUrl} alt="" />
                            <div className="info">
                                <h4 className="name">{a.name}</h4>
                                <p className="description text-nowrap">{a.position}</p>
                            </div>
                        </AnchorItem>
                    );
                })}
            </AnchorWrapper>
        </DiscoverSidebarLayout>
    );
});
