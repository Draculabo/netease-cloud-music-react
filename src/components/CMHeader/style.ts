import styled from "styled-components";
import spriteLogo from "@/assets/img/sprite_01.png";
export const HeaderWrapper = styled.div`
    background-color: #333;
    .content {
        display: flex;
        justify-content: space-between;
        font-size: 14px;
        height: 70px;
        .logo {
            width: 159px;
            height: 70px;
            margin-right: 20px;
            background: url(${spriteLogo}) no-repeat;
            > a {
                display: block;
                width: inherit;
                height: inherit;
            }
        }
    }
    .divider {
        height: 5px;
        background-color: #c20c0c;
    }
    a {
        &:hover {
            text-decoration: none;
        }
    }
`;
export const HeaderLeft = styled.div`
    display: flex;

    > a {
        position: relative;

        height: inherit;
        line-height: 50px;
        padding: 10px 20px;
        color: #eee;
        &:hover {
            color: #fff;
            background-color: #000;
        }
    }
    sub {
        content: "";
        display: none;
        border: 7px solid transparent;
        position: absolute;
        left: 50%;
        bottom: 0;
        border-bottom-color: #f00;
        transform: translate(-50%, 0);
    }

    .active {
        color: #fff;
        background-color: #000;
        sub {
            display: block;
        }
    }
`;
export const HeaderRight = styled.div`
    display: flex;
    align-items: center;
    .search-box {
        position: relative;
        width: 158px;
        height: 32px;
        input {
            width: inherit;
            height: inherit;
            padding-left: 30px;
            border-radius: 20px;
        }
        &::before {
            content: "";
            position: absolute;
            top: 10px;
            left: 10px;
            width: 14px;
            height: 14px;
            background: url(${spriteLogo}) no-repeat -10px -108px;
            background-color: #fff;
        }
    }
    .author-centre {
        font-size: 12px;
        color: #d3d3d3;
        padding: 5px 15px;
        border: 1px solid #7a7a7a;
        border-radius: 25px;
        margin-left: 20px;
        vertical-align: bottom;
        &:hover {
            color: #fff;
            border-color: #fff;
        }
    }
    .login {
        padding: 10px 15px;
        font-size: 13px;
        color: #ccc;
        &:hover {
            color: #fff;
        }
    }
`;
