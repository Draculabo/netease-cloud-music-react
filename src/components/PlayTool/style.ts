import styled from "styled-components";
import playBarSprite from "@/assets/img/playbar_sprite.png";
import progressBar from "@/assets/img/progress_bar.png";
import radioSlide from "@/assets/img/radio_slide.png";
import pip from "@/assets/img/pip.png";
export const PlayToolContainer = styled.div`
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    z-index: 999;
    background: url(${playBarSprite}) repeat-x 0 -6px;
    height: 47px;
`;
export const PlayToolWrapper = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    .song-name {
        color: #e8e8e8;
    }
    .song-author {
        color: #9b9b9b;
        margin-left: 10px;
    }
    .play-bar {
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 550px;
        .ant-slider {
            flex: 1;
            margin: 5px 0;
            padding: 0;
        }

        .ant-slider-rail {
            height: 9px;
            background: url(${progressBar}) repeat-x 0 0;
        }
        .ant-slider-track {
            height: 9px;
            background: url(${progressBar}) repeat-x 0 -66px;
        }
        .ant-slider:hover .ant-slider-rail {
            background-color: transparent;
        }
        .ant-slider-handle {
            border: none;
            &::before {
                content: "";
                background: url(${radioSlide}) no-repeat -37px -7px;
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                width: 6px;
                height: 6px;
            }
        }
    }
    .play-center {
        margin-left: 20px;
    }

    .current-time {
        color: #a1a1a1;
    }
    .time {
        margin-left: 10px;
        color: #797979;
    }

    .audio-operate {
        display: flex;
        align-items: center;
        margin-left: 20px;
        a {
            width: 25px;
            height: 25px;
            margin-right: 3px;
        }
    }
    .bar-operate {
        display: flex;
        align-items: center;
    }
`;
export const SongOperate = styled.div`
    display: flex;
    align-items: center;
    margin-left: 20px;
    a {
        width: 25px;
        height: 25px;
        margin-right: 3px;
    }
    .pip {
        background: url(${pip}) no-repeat;
        &:hover {
            background-position-y: -25px;
        }
    }
    .collect {
        background: url(${playBarSprite}) no-repeat -92px -163px;
        &:hover {
            background-position-y: -189px;
        }
    }
    .share {
        background: url(${playBarSprite}) no-repeat -118px -163px;
        &:hover {
            background-position-y: -189px;
        }
    }
`;
export const AudioOperate = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    background: url(${playBarSprite}) no-repeat -147px -238px;

    &:hover {
        text-decoration: none;
    }
    a {
        width: 25px;
        height: 25px;
        margin-right: 3px;
    }
    .volume {
        background: url(${playBarSprite}) no-repeat -2px -248px;
        &:hover {
            background-position-x: -31px;
        }
    }
    .order {
        background: url(${playBarSprite}) no-repeat -3px -344px;
        &:hover {
            background-position-x: -33px;
        }
    }
    .disorder {
        background: url(${playBarSprite}) no-repeat -66px -343px;
        &:hover {
            background-position-x: -93px;
        }
    }
    .repeat {
        background: url(${playBarSprite}) no-repeat -67px -248px;
        &:hover {
            background-position-x: -94px;
        }
    }
    .play-list {
        width: 59px;
        padding-left: 23px;
        text-align: center;
        color: #666;
        background: url(${playBarSprite}) no-repeat -43px -70px;
        &:hover {
            background-position-y: -100px;
            text-decoration: none;
        }
    }
`;
export const MusicImage = styled.a`
    margin-left: 20px;
    width: 34px;
    height: 35px;
    background-image: url(${(props: { url?: string }) => props.url});
    background-size: 100% 100%;
    background-repeat: no-repeat;
`;
export const PlayOperate = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    a {
        margin-left: 7px;
    }
    .prev,
    .next {
        width: 28px;
        height: 28px;
    }
    .prev {
        background: url(${playBarSprite}) no-repeat -2px -131px;
        &:hover {
            background-position-x: -32px;
        }
    }
    .play-btn {
        width: 36px;
        height: 36px;
        background: url(${playBarSprite}) no-repeat;
    }
    .play {
        background-position: 0 -204px;
        &:hover {
            background-position-x: -40px;
        }
    }
    .pause {
        background-position: 0 -165px;
        &:hover {
            background-position-x: -40px;
        }
    }
    .next {
        background: url(${playBarSprite}) no-repeat -82px -131px;
        &:hover {
            background-position-x: -112px;
        }
    }
`;
