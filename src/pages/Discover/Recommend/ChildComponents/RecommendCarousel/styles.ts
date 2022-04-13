import styled from "styled-components";
import bannerSprite from "@/assets/img/banner_sprite.png";
import download from "@/assets/img/download.png";
export const CBannerContainer = styled.div`
    background: url(${(props: { bgImage: string }) => props.bgImage}) center center no-repeat;

    transition: all 0.5s;
    background-size: 6000px;
    height: 285px;
`;
export const CBannerWrapper = styled.div`
    position: relative;

    display: flex;
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
interface Pos {
    pos: "left" | "right";
}
export const CArrow = styled.a`
    background: url(${bannerSprite}) no-repeat;
    position: absolute;
    left: ${(props: Pos) => (props.pos == "left" ? "-74px" : "initial")};
    right: ${(props: Pos) => (props.pos == "right" ? "-74px" : "initial")};
    background-position: 0 ${(props: Pos) => (props.pos == "left" ? "-358px" : "-507px")};
    top: 50%;
    transform: translate(0, -50%);
    width: 37px;
    height: 63px;
    &:hover {
        background-position: 0 ${(props: Pos) => (props.pos == "left" ? "-430px" : "-578px")};
    }
`;
