import styled from "styled-components";
import icon2 from "@/assets/img/icon2.png";
export const CommentListWrapper = styled.div`
    .comment-list-title {
        height: 30px;
        line-height: 30px;
        border-bottom: 1px solid #cfcfcf;
    }
    .comment-list {
        .comment-item {
            display: flex;
            padding: 15px 0;
            .avatarUrl {
                width: 50px;
                height: 50px;
                margin-right: 10px;
                cursor: pointer;
                background-size: 100% 100%;
                background-position: center center;
                background-repeat: no-repeat;
            }
            .content-field {
                display: flex;
                flex-direction: column;
                flex: 1;
                .name-content {
                    word-break: break-word;
                    line-height: 18px;
                    a {
                        color: #0c73c2;
                        white-space: nowrap;
                        &:hover {
                            text-decoration: underline;
                        }
                    }
                }
                .meta-data {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-top: 15px;
                    .date {
                        color: #999;
                    }
                    .thumb-replay {
                        display: flex;
                        align-items: center;
                        .thumb-icon {
                            width: 15px;
                            height: 14px;
                            background: url(${icon2}) no-repeat -150px 0;
                            margin-right: 5px;
                            cursor: pointer;
                            &:hover {
                                background-position: -150px -20px;
                            }
                        }
                        .thumb-count {
                            cursor: pointer;
                            &:hover {
                                text-decoration: underline;
                            }
                        }
                        .split {
                            color: #ccc;
                            margin: 0 8px;
                        }
                        .replay {
                            color: #666;
                            cursor: pointer;
                            &:hover {
                                text-decoration: underline;
                            }
                        }
                    }
                }
            }
        }
        .comment-item + .comment-item {
            border-top: 1px dotted #ccc;
        }
    }
`;
