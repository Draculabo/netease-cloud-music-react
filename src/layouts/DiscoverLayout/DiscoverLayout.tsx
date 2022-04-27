import { disCoverMenu } from "@/configs/linkData";
import { memo } from "react";
import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";
import { BasicLayout } from "../BasicLayout";
import { DiscoverTabWrapper } from "./styles";
export const DisCoverLayout: React.MemoExoticComponent<() => JSX.Element> = memo(() => {
    return (
        <BasicLayout>
            <DiscoverTabWrapper>
                <div className="wrap-v2">
                    {disCoverMenu.map((value, index) => {
                        return (
                            <NavLink key={index} to={value.link}>
                                {value.title}
                            </NavLink>
                        );
                    })}
                </div>
            </DiscoverTabWrapper>
            <Outlet />
        </BasicLayout>
    );
});
