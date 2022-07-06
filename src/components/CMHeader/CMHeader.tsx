import { memo } from "react";
import { Link, NavLink } from "react-router-dom";
import { HeaderLeft, HeaderRight, HeaderWrapper } from "./style";
import { headerLinks } from "@/configs/linkData";
export const CMHeader = memo(() => {
    return (
        <HeaderWrapper>
            <div className="content wrap-v1">
                <HeaderLeft>
                    <h1 className="logo">
                        <Link to={"/"}></Link>
                    </h1>
                    {headerLinks.map((value, index) => {
                        return index < 3 ? (
                            <NavLink key={index} to={value.link}>
                                {value.title}
                                <sub></sub>
                            </NavLink>
                        ) : (
                            <a key={index} href={value.link} rel={"noreferrer"} target={"_blank"}>
                                {value.title}
                            </a>
                        );
                    })}
                </HeaderLeft>
                <HeaderRight>
                    <div className="search-box">
                        <input name="search" placeholder="音乐/视频/电台/用户" type="search" />
                    </div>
                    <a
                        className="author-centre"
                        href="https://music.163.com/login?targetUrl=%2Fcreatorcenter"
                        rel={"noreferrer"}
                        target={"_blank"}
                    >
                        创作者中心
                    </a>
                    <a className="login">登录</a>
                </HeaderRight>
            </div>
            <div className="divider bg-red-default"></div>
        </HeaderWrapper>
    );
});
