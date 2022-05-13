import styled from "styled-components";
import download from "@/assets/img/download.png";

import bannerSprite from "@/assets/img/banner_sprite.png";
export const CBannerContainer = styled.div`
    background: url(${(props: { bgImage: string }) => props.bgImage}) center center no-repeat;

    transition: all 0.5s;
    background-size: 6000px;
    height: 285px;
`;
export const CBannerWrapper = styled.div`
    position: relative;

    display: flex;
    .carousel-arrow {
        position: absolute;

        top: 50%;

        background: url(${bannerSprite}) no-repeat;
        transform: translate(0, -50%);
    }
    .left-arrow {
        left: -74px;
        background-position: 0 -358px;
        &:hover {
            background-position: 0 -428px;
        }
    }
    .right-arrow {
        right: -74px;
        background-position: 0 -507px;
        &:hover {
            background-position: 0 -576px;
        }
    }
`;

export const CarouselWrapper = styled.div`
    width: 730px;

    height: 285px;
`;
export const BannerRight = styled.div`
    background: url(${download}) no-repeat;
    width: 254px;
    height: inherit;
    a {
        display: block;
        margin: 186px 19px 0;
        width: 215px;
        height: 56px;
        background: url(${download}) -19px -185px no-repeat;

        &:hover {
            background-position: 0 -289px;
        }
    }
    p {
        margin-top: 10px;
        text-align: center;
        color: #8d8d8d;
    }
`;
export const CImg = styled.img`
    height: 285px;
`;
