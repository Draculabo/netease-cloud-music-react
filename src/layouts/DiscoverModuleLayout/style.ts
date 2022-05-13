import styled from "styled-components";
import sprite02 from "@/assets/img/sprite_02.png";
export const ModuleWrapper = styled.div`
    margin-bottom: 20px;
`;
export const ModuleHeader = styled.div`
    background: url(${sprite02}) -230px -154px no-repeat;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid #c10d0c;

    a {
        color: #000;
        &:hover {
            text-decoration: underline;
        }
    }
    .hc-more {
        position: relative;
        margin-right: 20px;
        &::after {
            position: absolute;
            top: 50%;
            right: -15px;
            transform: translate(0, -50%);
            content: "";
            background: url(${sprite02}) no-repeat 0 -240px;
            width: 12px;
            height: 12px;
        }
    }
`;
export const HeaderLeft = styled.div`
    display: flex;
    align-items: center;
    padding-left: 25px;
    .hc-header {
        font-size: 20px;
        &:hover {
            text-decoration: none;
        }
    }
    .hc-tab {
        margin-left: 20px;
        a {
            position: relative;
            margin: 0 5px;
            padding: 10px;
            &::after {
                position: absolute;
                right: -10px;
                content: "|";
            }
            &:last-child {
                &::after {
                    content: "";
                }
            }
        }
    }
`;
export const HotList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;
