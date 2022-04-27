import styled from "styled-components";
import spriteFooter03 from "@/assets/img/sprite_footer_03.png";
export const FooterWrapper = styled.div`
    padding-top: 20px;
    display: flex;
    justify-content: space-between;
    height: 153px;
`;
export const FooterLeft = styled.div`
    width: 520px;
    line-height: 2;
    .first-line {
        a {
            position: relative;
            padding: 5px;
            &::after {
                content: "|";
                position: absolute;
                top: 50%;
                left: 100%;
                transform: translate(0, -50%);
            }
            &:first-child {
                padding-left: 0;
            }
            &:last-child {
                padding-right: 0;
                a::after {
                    content: "";
                }
            }
            &:hover {
                text-decoration: underline;
            }
        }
        a:last-child a::after {
            content: "";
        }
    }

    .second-line,
    .third-line {
        span {
            margin-right: 20px;
        }
    }
`;
export const FooterRight = styled.div`
    display: flex;
    .unit {
        display: flex;
        flex-direction: column;
        align-items: center;

        margin-right: 20px;
        &:first-child .logo-amped {
            background-position: 0 -450px;
        }
        &:nth-child(2) .logo-amped {
            background-position: -60px -400px;
        }
        &:nth-child(3) .logo-amped {
            background-position: 0 -300px;
        }
        &:nth-child(4) .logo-amped {
            background-position: -60px -350px;
        }
        &:last-child {
            margin-right: 0;
            .logo-amped {
                background-position: 0 -400px;
            }
        }
    }
    span {
        padding: 5px;
    }
    .logo-amped {
        width: 50px;
        height: 45px;
        background: url(${spriteFooter03}) no-repeat 0 9999px;
        background-size: 104px 545px;
    }
`;
