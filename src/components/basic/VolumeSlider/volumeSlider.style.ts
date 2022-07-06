import styled from "styled-components";
import progressBar from "@/assets/img/progress_bar.png";
import playbarSprite from "@/assets/img/playbar_sprite.png";
const VolumeSliderWrapper = styled.div`
    position: absolute;
    top: -124px;
    width: 32px;
    height: 114px;
    background: url(${playbarSprite}) no-repeat 0 -503px;
    .ant-slider-track {
        width: 4px;
        background: url(${playbarSprite}) no-repeat -40px -523px;
    }
    .ant-slider-vertical {
        height: 90px;
        margin: 10px 10px 6px 10px;
    }
    input {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: calc(100% + 15px);
        height: 4px;
        -webkit-appearance: none; /*清除系统默认样式*/
        z-index: 10;
    }
    input[type="range"]::-webkit-slider-thumb {
        position: relative;
        -webkit-appearance: none; /*清除系统默认样式*/
        width: 18px;
        height: 18px;
        background: url(${playbarSprite}) no-repeat -40px -250px;
        cursor: pointer;
        z-index: 20;
        &:hover {
            background-position: -40px -280px;
        }
    }

    .total-bar {
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        width: 100%;
        height: 4px;
        background: url(${progressBar}) no-repeat right 0;
    }

    .current-bar {
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        height: 4px;
        background: url(${progressBar}) no-repeat left -66px;
    }
`;

export default VolumeSliderWrapper;
