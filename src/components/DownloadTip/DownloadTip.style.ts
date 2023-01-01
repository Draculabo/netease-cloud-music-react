import styled from "styled-components";

export const DownloadTipWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 66px;
    margin-top: 30px;
    .text {
        font-size: 13px;
        color: #333;
    }
    .btn {
        width: 120px;
        height: 30px;
        background-image: linear-gradient(90deg, #ff5a4c 0%, #ff1d12 100%);
        border-radius: 18px;
        line-height: 30px;
        font-size: 12px;
        color: #ffffff;
        text-align: center;
        cursor: pointer;
        text-decoration: dashed;
    }
`;
