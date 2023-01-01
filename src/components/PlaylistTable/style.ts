import styled from "styled-components";
import spriteTable from "@/assets/img/sprite_table.png";
import spriteIcon2 from "@/assets/img/sprite_icon2.png";

export const PlaylistTableWrapper = styled.div``;
export const PlaylistTitleWrapper = styled.div`
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
        font-weight: 700;
    }
`;
export const PlaylistCTable = styled.table`
    width: 100%;
    border: 1px solid #d9d9d9;

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
export const PlaylistRow = styled.tr`
    padding: 5px 0;

    .index,
    .new {
        margin: 0 5px;
    }

    .new {
        width: 16px;
        height: 5px;
        background: url(${spriteIcon2}) no-repeat -67px -289px;
    }

    .playing {
        width: 17px;
        height: 17px;
        background: url(${spriteIcon2}) no-repeat -45px -635px;
    }

    .td-container {
        display: flex;
        align-items: center;
    }

    .song-duration {
        width: 90px;
        padding: 0 10px;
    }

    td {
        padding: 6px 10px;

        &:hover {
            .operate {
                display: flex;
            }

            .song-duration {
                display: none;
            }
        }
    }

    .author {
        max-width: 12em;
    }
`;
export const Operate = styled.div`
    display: none;
    align-items: center;
    justify-content: space-around;
    margin: 0 3px;

    .btn {
        margin: 0 3px;
    }

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
export const TDCenter = styled.div`
    span {
        margin-left: 10px;
    }

    .alias {
        color: #aeaeae;
    }

    .img-link {
        display: block;
    }

    img {
        width: 50px;
        height: 50px;
    }

    .mv {
        width: 23px;
        height: 17px;
        margin: 1px 0 0 0;
        background-position: 0 -151px;
    }

    .ttc {
        text-align: left;
        height: 18px;
        margin-right: 20px;
    }

    .txt {
        display: inline-block;
        border-spacing: 0;
        line-height: 18px;
        text-align: left;
        border: 0;
        position: relative;
        padding-right: 25px;
        height: 20px;
        margin: 0 -25px 0 0;
        max-width: 210px;
    }

    .mv {
        line-height: 18px;
        text-align: left;
        background: url(${spriteTable}) no-repeat 0 -151px;
        float: left;
        overflow: hidden;
        text-indent: -999px;
        cursor: pointer;
        position: absolute;
        top: 50%;
        transform: translate(0, -50%);
        right: 0;
        width: 23px;
        height: 17px;
        margin: 1px 0 0 0;
    }
`;
