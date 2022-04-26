import styled from "styled-components";
import spriteCover from "@/assets/img/sprite_cover.png";
import spriteIcon from "@/assets/img/sprite_icon.png";
import sprite2 from "@/assets/img/sprite_02.png";
export const NewSongWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
    background: #f5f5f5;
    height: 186px;
    .roll-list {
        /* display: flex;
        align-items: center; */
        overflow: hidden;
        width: 650px;
        height: 100%;
    }
    .slide-list {
        display: flex;
        align-items: center;
        width: 100%;
    }
`;

export const RollItem = styled.div`
    width: 100px;
    display: flex;
    flex-direction: column;
    margin: 15px;
    perspective: 500px;
    div {
        position: relative;

        transform: translate3d(0, 0, 20px);
        transition: transform 0.2s;
        &:hover {
            transform: translate3d(0, 0, 0);
            .icon-play {
                display: block;
            }
        }
    }
    .mask {
        position: absolute;
        top: 0;
        left: 0;
        width: 120px;
        height: 100%;
        background: url(${spriteCover}) -5px -570px no-repeat;
    }
    .icon-play {
        display: none;
        position: absolute;
        right: 0;
        bottom: 0;
        background: url(${spriteIcon}) 0 -110px no-repeat;
        width: 22px;
        height: 22px;
        z-index: 1;
    }
    img {
        width: 100px;
        height: 100px;
        /* box-shadow: 5px 5px 5px 1px #ccc; */
    }
    .album-name {
        margin-top: 3px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
`;
const PArrow = styled.a`
    position: absolute;
    top: 40%;
    transform: translate(0, -50%);
    width: 7px;
    height: 13px;
    background: url(${sprite2}) no-repeat;
    background-position-y: -77px;
`;
export const LArrow = styled(PArrow)`
    left: 10px;
    background-position-x: -265px;
    &:hover {
        background-position-x: -285px;
    }
`;
export const RArrow = styled(PArrow)`
    right: 10px;
    background-position-x: -305px;
    &:hover {
        background-position-x: -326px;
    }
`;
