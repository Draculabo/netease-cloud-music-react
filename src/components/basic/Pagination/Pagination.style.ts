import styled from "styled-components";
import sprite_button2 from "@/assets/img/sprite_button2.png";

export const PaginationWrapper = styled.div`
    .rc-pagination {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 20px 0;

        .rc-pagination-prev {
            .rc-pagination-item-link {
                width: 69px;
                height: 24px;
                line-height: 24px;
                color: #333;
                text-align: left;
                padding-left: 22px;
                background: url(${sprite_button2}) no-repeat 0 -560px;
                border: 1px solid #ccc;
                cursor: pointer;
                &:after {
                    content: "上一页";
                    display: block;
                }
                &:hover {
                    background-position: 0 -590px;
                }
            }

            &.rc-pagination-disabled {
                .rc-pagination-item-link {
                    background-position: 0 -620px;
                    color: #cacaca;
                    cursor: default;
                }
            }
        }

        .rc-pagination-item {
            display: inline-block;
            margin: 0 5px 0 5px;
            border: 1px solid #ccc;
            border-radius: 2px;
            vertical-align: middle;
            min-width: 30px;
            height: 22px;
            padding: 0 8px;
            background-color: #fff;
            line-height: 22px;
            cursor: pointer;
            &.rc-pagination-item-active {
                border-color: #a2161b;
                color: #fff;
                background: url(${sprite_button2}) no-repeat 0 -650px;
                cursor: default;
                a {
                    color: #fff;
                    cursor: default;
                }
            }

            a {
                display: block;
                width: 100%;
                height: 100%;
                text-align: center;
            }

            &:hover {
                border-color: #666;
            }
        }

        .rc-pagination-next {
            .rc-pagination-item-link {
                width: 69px;
                height: 24px;
                line-height: 24px;
                color: #333;
                text-align: left;
                padding-left: 12px;
                background: url(${sprite_button2}) no-repeat -75px -560px;
                border: 1px solid #ccc;
                cursor: pointer;
                &:after {
                    content: "下一页";
                    display: block;
                }
                &:hover {
                    background-position: -75px -590px;
                }
            }
            &.rc-pagination-disabled {
                .rc-pagination-item-link {
                    background-position: -75px -620px;
                    color: #cacaca;
                    cursor: default;
                }
            }
        }

        .rc-pagination-disabled {
            &,
            &:hover,
            &:focus {
                cursor: not-allowed;
                .rc-pagination-item-link {
                    color: #cacaca;
                    cursor: default;
                }
            }
        }

        .rc-pagination-jump-prev,
        .rc-pagination-jump-next {
            outline: 0;
            button {
                background: transparent;
                border: none;
                cursor: pointer;
                color: #666;
            }

            button:after {
                display: block;
                content: "...";
            }
        }
    }
`;
