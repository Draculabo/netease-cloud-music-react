import styled from "styled-components";
import sprite02 from "@/assets/img/sprite_02.png";
export const DiscovertWrapper = styled.div`
    display: flex;
    background: #fff;
`;
export const DiscovertLeft = styled.div`
    padding: 20px;
    flex: 1;
`;
export const DiscovertRight = styled.div`
    width: 250px;
`;
export const UserInfo = styled.div`
    height: 124px;
    background: url(${sprite02}) no-repeat;
    overflow: hidden;
    .description {
        margin: 20px;
    }
    .login-btn {
        display: block;
        background: url(${sprite02}) no-repeat 0 -195px;
        width: 100px;
        height: 31px;
        line-height: 31px;
        text-align: center;
        color: #fff;
        margin: 0 auto;
        &:hover {
            background-position-x: -110px;
        }
    }
`;
