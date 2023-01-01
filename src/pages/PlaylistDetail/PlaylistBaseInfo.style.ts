import styled from "styled-components";
import sprite_cover from "@/assets/img/sprite_cover.png";
import sprite_button from "@/assets/img/sprite_button.png";
import sprite_icon2 from "@/assets/img/sprite_icon2.png";
export const PlaylistBaseInfoWrapper = styled.div`
    display: flex;
    margin-bottom: 27px;

    .playlist-img {
        position: relative;
        width: 208px;
        height: 208px;
        margin-right: 22px;

        img {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 200px;
            height: 200px;
        }

        .mask {
            width: 208px;
            height: 208px;
            background: url(${sprite_cover}) no-repeat 0 -1285px;
        }
    }

    .info-field {
        .title {
            display: flex;
            align-items: flex-start;
            margin-bottom: 12px;

            .icon {
                width: 54px;
                height: 24px;
                margin-right: 10px;
                background: url(${sprite_icon2}) no-repeat 0 -243px;
            }

            .text {
                flex: 1;
                font-size: 20px;
                line-height: 24px;
            }
        }

        .creator-date {
            display: flex;
            align-items: center;
            margin-bottom: 20px;

            .creator {
                display: flex;
                align-items: center;

                .avatar {
                    width: 35px;
                    height: 35px;
                    margin-right: 10px;
                    cursor: pointer;
                }

                .name {
                    a {
                        color: var(--link-color);
                    }
                }
            }

            .date {
                color: #999;
                margin-left: 15px;

                span {
                    margin-left: 5px;
                }
            }
        }
    }

    .tags-container {
        display: flex;
        align-items: center;

        .label {
            color: #666;
        }

        .tag-list {
            display: flex;
            align-items: center;
            margin-left: 10px;

            .tag-item {
                min-width: 50px;
                height: 22px;
                padding: 0 10px 0 0;
                cursor: pointer;
                background: url(${sprite_button}) no-repeat right -27px;

                span {
                    display: block;
                    height: 22px;
                    line-height: 22px;
                    padding: 0 3px 0 13px;
                    color: #777;
                    text-shadow: 0 1px #fdfdfd;
                    background: url(${sprite_button}) no-repeat;
                }

                &:hover {
                    background-position: right -1430px;

                    span {
                        background-position: 0 -1400px;
                    }
                }
            }

            .tag-item + .tag-item {
                margin-left: 10px;
            }
        }
    }

    .description {
        color: #666;
        margin-top: 10px;

        .label {
            float: left;
            margin-right: 10px;
            white-space: nowrap;
        }

        .text {
            line-height: 18px;
            white-space: pre-wrap;
        }
    }
`;
