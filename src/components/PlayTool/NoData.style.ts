import styled from "styled-components";
import playlist from "@/assets/img/playlist.png";
export const NoDataWrapper = styled.div`
    display: flex;
    margin: auto;
    .no-data-icon {
        width: 36px;
        height: 29px;
        margin-right: 18px;
        background: url(${playlist}) no-repeat -138px 0;
    }
    .no-data-text {
        color: #aaa;
        font-size: 14px;
    }
`;
export const NoDataContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
`;
