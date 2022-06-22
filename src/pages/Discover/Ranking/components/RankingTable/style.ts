import styled from "styled-components";
import spriteTable from "@/assets/img/sprite_table.png";
import spriteIcon2 from "@/assets/img/sprite_icon2.png";
export const RankingTableWrapper = styled.div``;
export const RankingTitleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid #c20c0c;
    h2 {
        font-size: 20px;
    }
    .title-left {
        display: flex;
        align-items: center;
    }
    .song-count {
        padding-left: 10px;
    }
    .play-count {
        color: #c20c0c;
        font-weight: 700;
    }
`;
export const RankingCTable = styled.table`
    width: 100%;

    th {
        position: relative;
        background: url(${spriteTable}) repeat-x 0px -1px;
        text-align: left;
        padding-left: 10px;
        font-weight: 400;
        &:not(:last-child)::after {
            content: "";
            position: absolute;
            right: 0;
            top: 50%;
            background: url(${spriteTable}) no-repeat -1px -333px;
            transform: translate(0, -50%);
            width: 2px;
            height: 35px;
        }
        &:nth-child(3) {
            width: 91px;
        }
        &:nth-child(4) {
            width: 26%;
        }
    }

    .index-head {
        width: 77px;
        height: 34px;
    }
    .even {
        background-color: #f7f7f7;
    }
`;
export const RankingRow = styled.tr`
    padding: 5px 0;
    .td-index {
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
    .new {
        width: 16px;
        height: 5px;
        background: url(${spriteIcon2}) no-repeat -67px -289px;
    }
    .img-link {
        display: block;
    }
    img {
        width: 50px;
        height: 50px;
    }
    .td-container {
        display: flex;
        align-items: center;
    }
    .playing {
        width: 17px;
        height: 17px;
        background: url(${spriteIcon2}) no-repeat -45px -635px;
    }
    td {
        padding: 5px 0;
        &:hover {
            .operate {
                display: flex;
            }
            .song-duration {
                display: none;
            }
        }
    }
    .td-center {
        span {
            margin-left: 10px;
        }
        .alias {
            color: #aeaeae;
        }
    }
`;
export const Operate = styled.div`
    display: none;
    align-items: center;
    justify-content: space-around;
    width: 90%;

    .add-playing {
        width: 14px;
        height: 14px;
        background: url(${spriteIcon2}) no-repeat 0 -700px;
    }
    .collect {
        width: 16px;
        height: 14px;
        background: url(${spriteTable}) no-repeat -1px -174px;
    }
    .share {
        width: 14px;
        height: 14px;
        background: url(${spriteTable}) no-repeat -2px -195px;
    }
    .download {
        width: 14px;
        height: 14px;
        background: url(${spriteTable}) no-repeat -83px -174px;
    }
`;
