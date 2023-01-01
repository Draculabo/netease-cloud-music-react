import styled from "styled-components";
import wrapBg from "@/assets/img/wrap-bg.png";

export const PlaylistDetailContainer = styled.div`
    display: flex;
    border: 1px solid #d3d3d3;
    background: url(${wrapBg}) repeat-y center 0;

    .left-field {
        width: 708px;
        padding: 47px 30px 40px 39px;
    }

    .right-field {
        flex: 1;
        padding: 20px 40px 40px 30px;
    }
`;
