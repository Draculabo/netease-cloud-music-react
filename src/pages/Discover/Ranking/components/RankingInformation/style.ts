import styled from "styled-components";
import spriteIcon2 from "@/assets/img/sprite_icon2.png";
import spriteButton from "@/assets/img/sprite_button.png";
export const RankingInformationWrapper = styled.div`
    display: flex;
    padding: 40px 0;
    .cover-rank {
        width: 150px;
        height: 150px;
        border: 1px solid #ccc;
        padding: 2px;
    }
`;

export const RankingInformationRight = styled.div`
    padding-left: 20px;

    .update-wrapper {
        display: flex;
        align-items: center;
        line-height: 30px;
    }
    i {
        width: 13px;
        height: 13px;
        background: url(${spriteIcon2}) no-repeat -70px -140px;
    }
    .title {
        margin-top: 20px;
        font-size: 20px;
    }
    .update-date,
    .update-description {
        padding-left: 5px;
    }
    .update-description {
        color: #999;
    }
`;
export const OperateWrapper = styled.div`
    display: flex;
    margin-top: 10px;
    button {
        margin-right: 5px;
    }
    .playing {
        background-position: 0 -633px;
        color: #fff;
        margin-left: 0;
        padding-left: 35px;
        margin-right: 0;

        &::after {
            position: static;
        }
    }
    .add-playing {
        background: url(${spriteButton}) no-repeat 0 -1588px;
        width: 31px;
        margin-left: 0;
    }
    .collect-btn {
        background-position: 0 -977px;
        &::after {
            background-position: -242px -1020px;
        }
    }
    .share {
        background-position: 0 -1225px;
        &::after {
            background-position: -242px -1020px;
        }
    }
    .download {
        background-position: 0 -2761px;
        &::after {
            background-position: -242px -1020px;
        }
    }
    .comment {
        background-position: 0 -1465px;
        &::after {
            background-position: -242px -1020px;
        }
    }
`;
