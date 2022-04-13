import styled from "styled-components";
import sprite02 from "@/assets/img/sprite_02.png";
export const HotRecommendWrapper = styled.div`
    padding: 20px 20px 40px;
    a {
        &:hover {
            text-decoration: underline;
        }
    }
`;
export const HotHeader = styled.div`
    background: url(${sprite02}) -230px -154px no-repeat;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid #c10d0c;
    margin-right: 251px;
    a {
        color: #000;
    }
`;
export const HeaderLeft = styled.div`
    display: flex;
    align-items: center;
    padding-left: 25px;
    .hc-header {
        font-size: 20px;
        &:hover {
            color: initial;
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
    margin-right: 251px;
`;
