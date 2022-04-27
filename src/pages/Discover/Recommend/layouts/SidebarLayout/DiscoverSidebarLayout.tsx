import { memo, PropsWithChildren } from "react";
import { SideBarWrapper } from "./style";
interface SideBarProps {
    title: string;
    allLink: boolean;
}
export const DiscoverSidebarLayout = memo<PropsWithChildren<SideBarProps>>(
    ({ children, title, allLink }) => {
        return (
            <SideBarWrapper>
                <div className="side-top">
                    <h5>{title}</h5>
                    {allLink && <a href="">查看全部{">"}</a>}
                </div>

                {children}
            </SideBarWrapper>
        );
    },
);
