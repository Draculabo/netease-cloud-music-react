import styled from "styled-components";
import spriteIcon from "@/assets/img/sprite_icon.png";
import spriteCover from "@/assets/img/sprite_cover.png";
export const HRWrapper = styled.div`
    margin: 20px 0 0 20px;
    width: 140px;
`;
export const AlbumCover = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    width: 140px;

    img {
        height: 140px;
    }
`;
export const HRTop = styled.div`
    position: relative;
    a {
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        background: url(${spriteCover}) no-repeat;
        width: 100%;
        height: 100%;
    }
`;
export const HMBottom = styled.div`
    position: absolute;
    left: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: url(${spriteCover}) 0 -537px no-repeat;
    padding: 0 7px;
    width: 100%;
    height: 27px;
    color: #eee;
    .left {
        display: flex;
        align-items: center;
        .views {
            margin-left: 6px;
        }
    }
    .play-icon {
        background: url(${spriteIcon}) no-repeat;
        width: 16px;
        height: 17px;
        &:hover {
            background: url(${spriteIcon}) 0 -60px no-repeat;
        }
    }
    .icon-headset {
        background: url(${spriteIcon}) 0 -24px no-repeat;
        width: 14px;
        height: 11px;
    }
`;
export const AlbumDesc = styled.a`
    display: block;
    font-size: 14px;
    margin-top: 6px;
    &:hover {
        color: inherit;
    }
`;
