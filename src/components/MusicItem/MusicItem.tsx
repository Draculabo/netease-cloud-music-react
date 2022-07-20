import { formatCount } from "@/utils";
import { memo } from "react";
import { AlbumCover, AlbumDesc, HMBottom, HRTop, HRWrapper } from "./style";
import { handleImageSize } from "@/utils/image";

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
                    <img
                        src={handleImageSize({ url: rc.picUrl, width: 140, height: 140 })}
                        alt=""
                    />
                    <a href={rc.picUrl} />
                </HRTop>
                <HMBottom>
                    <div className="left">
                        <span className="icon-headset" />
                        <span className="views">{formatCount(rc.playCount)} </span>
                    </div>
                    <a href="" className="play-icon" />
                </HMBottom>
            </AlbumCover>
            {/* 热门推荐项目描述 */}
            <AlbumDesc>{rc.name}</AlbumDesc>
        </HRWrapper>
    );
});
