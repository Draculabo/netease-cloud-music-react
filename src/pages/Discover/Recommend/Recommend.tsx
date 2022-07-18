import { FC } from "react";
import {
    HotRecommend,
    RecommendCarousel,
    NewSong,
    Ranking,
    RecommendSinger,
    HotAnchor,
} from "./components";
import { DiscovertLeft, DiscovertRight, DiscovertWrapper, UserInfo } from "./style";

const Recommend: FC = () => {
    return (
        <>
            {/* 轮播图 */}
            <RecommendCarousel />
            {/* 推荐主体 */}
            <DiscovertWrapper className="wrap-v2">
                {/* 推荐主体左边 */}
                <DiscovertLeft>
                    {/* 热门推荐 */}
                    <HotRecommend />
                    {/* 新碟上架 */}
                    <NewSong />
                    {/* 榜单 */}
                    <Ranking />
                </DiscovertLeft>
                <DiscovertRight>
                    {/* 用户信息 */}
                    <UserInfo>
                        <p className="description">
                            登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机
                        </p>
                        <a href="" className="login-btn">
                            用户登录
                        </a>
                    </UserInfo>
                    {/* 入驻歌手 */}
                    <RecommendSinger />
                    {/* 热门主播 */}
                    <HotAnchor />
                </DiscovertRight>
            </DiscovertWrapper>
        </>
    );
};
export default Recommend;
