import styled from "styled-components";
import playlistBg from "@/assets/img/playlist_bg.png";
import playlistPng from "@/assets/img/playlist.png";
export const PlayListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: 47px;
    left: 50%;
    width: 900px;
    height: 300px;
    padding: 0 5px;
    transform: translateX(-50%);
    .play-list-header {
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 40px;
        background: url(${playlistBg}) no-repeat 0 0;
        .header-left {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 554px;
            height: 100%;
            .title {
                margin-left: 30px;
                font-size: 14px;
                color: #e2e2e2;
            }
            .btns {
                display: flex;
                align-items: center;
                margin-right: 20px;
                cursor: pointer;
                .text {
                    &:hover {
                        text-decoration: underline;
                    }
                }
                .save-all-btn {
                    display: flex;
                    align-items: center;
                    color: #ccc;
                    .save-all-btn-icon {
                        width: 16px;
                        height: 16px;
                        background: url(${playlistPng}) no-repeat -24px 0;
                        margin-right: 4px;
                    }
                }
                .splite-line {
                    height: 15px;
                    border-left: 1px solid #000;
                    border-right: 1px solid #2c2c2c;
                    margin: 0 10px;
                }
                .clear-btn {
                    display: flex;
                    align-items: center;
                    color: #ccc;
                    .clear-btn-icon {
                        width: 13px;
                        height: 16px;
                        background: url(${playlistPng}) no-repeat -51px 0;
                        margin-right: 4px;
                    }
                }
            }
        }
        .header-right {
            position: relative;
            display: flex;
            align-items: center;
            flex: 1;
            height: 100%;
            .song-name {
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
                color: #fff;
                width: 80%;
                text-align: center;
            }
            .close-btn {
                position: absolute;
                right: 10px;
                width: 30px;
                height: 30px;
                background: url(${playlistPng}) no-repeat -195px 9px;
                cursor: pointer;
            }
        }
    }
    .play-list-content {
        display: flex;
        flex: 1;
        overflow: hidden;
        background: url(${playlistBg}) repeat-y -1014px 0;
        .play-list-content-left {
            width: 554px;
            height: calc(300px - 40px);
            overflow: hidden;
            overflow-y: scroll;
            &::-webkit-scrollbar {
                width: 6px;
            }
            &::-webkit-scrollbar-thumb {
                border-radius: 10px;
                background-color: #868686;
            }
            &::-webkit-scrollbar-track {
                background-color: #000;
            }
            .play-list {
                height: 100%;
            }
        }
        .play-list-content-right {
            flex: 1;
            padding: 20px 20px;
            overflow: hidden;
            overflow-y: scroll;
            height: 260px;
            &::-webkit-scrollbar {
                width: 6px;
            }
            &::-webkit-scrollbar-thumb {
                border-radius: 10px;
                background-color: #868686;
            }
            &::-webkit-scrollbar-track {
                background-color: #000;
            }
            .lyric-list {
                .lyric-line {
                    p {
                        font-size: 12px;
                        text-align: center;
                        color: #989898;
                        height: 32px;
                        line-height: 32px;

                        &.active {
                            color: #fff;
                        }
                    }
                }
            }
        }
    }
`;

export const PlayListItem = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 28px;
    padding-left: 15px;
    cursor: pointer;
    &:hover {
        color: #fff;
        background-color: rgba(0, 0, 0, 0.4);
        .singers {
            a {
                color: #fff;
            }
            span {
                color: #fff;
            }
        }
        .song-name,
        .duration {
            color: #fff;
        }
    }

    .playing-icon {
        visibility: hidden;
        width: 10px;
        height: 13px;
        margin: 0 5px 0 0;
        background: url(${playlistPng}) no-repeat -182px 0;
        &.active {
            visibility: visible;
        }
    }
    .song-name {
        width: 256px;
        color: #ccc;
    }
    .operator-container {
        width: 88px;
    }
    .singers {
        width: 70px;
        color: #9b9b9b;
        white-space: nowrap;

        span {
            cursor: pointer;
            a {
                color: #9b9b9b;
            }
            &:hover {
                text-decoration: underline;
            }
        }
        span + span {
            &::before {
                content: "/";
            }
        }
    }
    .duration {
        color: #666;
        margin-left: 10px;
    }
    .goto-btn {
        width: 14px;
        height: 16px;
        margin-left: 25px;
        background: url(${playlistPng}) no-repeat -80px 0;
        &:hover {
            background-position: -80px -20px;
        }
        a {
            display: block;
            width: 100%;
            height: 100%;
        }
    }
`;
