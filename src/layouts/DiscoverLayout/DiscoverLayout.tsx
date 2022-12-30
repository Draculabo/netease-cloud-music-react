import { disCoverMenu } from "@/configs/linkData";
import { memo } from "react";
import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";
import { BasicLayout } from "@/layouts";
import { DiscoverTabWrapper } from "./style";

export const DiscoverLayout = memo(() => {
    return (
        <BasicLayout>
            <DiscoverTabWrapper className="bg-red-default">
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
