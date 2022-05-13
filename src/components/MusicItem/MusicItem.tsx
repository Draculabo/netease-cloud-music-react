import { formatCount } from "@/utils";
import { memo } from "react";
import { AlbumCover, AlbumDesc, HMBottom, HRTop, HRWrapper } from "./style";
interface Props {
    rc: any;
}
export const MusicItem = memo<Props>(props => {
    const { rc } = props;
    return (
        <HRWrapper>
            {/* 热门推荐项目头部 */}
            <AlbumCover>
                <HRTop>
                    <img src={rc.picUrl} alt="" />
                    <a href={rc.picUrl}></a>
                </HRTop>
                <HMBottom>
                    <div className="left">
                        <span className="icon-headset"></span>
                        <span className="views">{formatCount(rc.playCount)} </span>
                    </div>
                    <a href="" className="play-icon"></a>
                </HMBottom>
            </AlbumCover>
            {/* 热门推荐项目描述 */}
            <AlbumDesc>{rc.name}</AlbumDesc>
        </HRWrapper>
    );
});
