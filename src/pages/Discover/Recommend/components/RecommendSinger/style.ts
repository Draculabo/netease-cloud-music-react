import styled from "styled-components";
import spriteButton2 from "@/assets/img/sprite_button.png";
export const RecommendSingerWrapper = styled.div`
    padding: 10px;
`;
export const SingerItem = styled.a`
    margin-bottom: 15px;
    display: flex;
    background-color: #fafafa;

    &:hover {
        text-decoration: none;
    }
    .avatar {
        width: 62px;
        height: 62px;
    }
    .info {
        width: 133px;
        height: 62px;
        padding: 10px 0 0 15px;
    }
    h4 {
        font-weight: 700;
        font-size: 14px;
    }
`;
export const ApplicationButton = styled.a`
    display: block;
    background: url(${spriteButton2}) no-repeat right -100px;
    &:hover {
        text-decoration: none;
    }
    i {
        display: block;
        width: 170px;
        height: 31px;
        line-height: 31px;
        background: url(/static/media/sprite_button.398d627a5d3157b19f4a.png) no-repeat 0 -59px;
        padding: 0 13px 0px 13px;
        box-sizing: content-box;
        text-align: center;
        font-weight: 700;
    }
`;
