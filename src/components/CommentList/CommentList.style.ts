import styled from "styled-components";
import icon2 from "@/assets/img/icon2.png";
export const CommentListWrapper = styled.div`
    .comment-list-title {
        height: 30px;
        line-height: 30px;
        border-bottom: 1px solid #cfcfcf;
    }
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
        }
    }
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
    .comment-item {
        display: flex;
        padding: 15px 0;
    }
    .content-field {
        display: flex;
        flex-direction: column;
        flex: 1;
    }
    .comment-list {
        .comment-item + .comment-item {
            border-top: 1px dotted #ccc;
        }
    }
`;

export const AvatarWrapper = styled.img`
    width: 50px;
    aspect-ratio: 1;
    margin-right: 10px;
    cursor: pointer;
`;
