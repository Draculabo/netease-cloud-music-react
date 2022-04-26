import styled from "styled-components";
import recommendTopBg from "@/assets/img/recommend-top-bg.png";
import sprite2 from "@/assets/img/sprite_02.png";
import spriteIcon2 from "@/assets/img/sprite_icon2.png";
export const RankingWrapper = styled.div`
    display: flex;
    background: url(${recommendTopBg}) no-repeat;
    height: 472px;
`;
export const RankingListWrapper = styled.dl`
    width: 230px;
    .more {
        line-height: 32px;
        margin-left: 155px;
        &:hover {
            text-decoration: underline;
        }
    }
`;
export const RankingListTop = styled.dt`
    display: flex;
    padding: 20px;

    .mask {
        position: relative;
        width: 80px;
        height: 80px;
    }
    img {
        width: 80px;
        height: 80px;
    }
    .mask-cover {
        position: absolute;
        top: 0;
        left: 0;
        width: 80px;
        height: 80px;
    }
    .ranking-right {
        margin-left: 10px;
    }
    .ranking-link {
        font-size: 14px;
        font-weight: 700;
        color: #000;
    }
    .list-bottom {
        display: flex;
        margin-top: 10px;
        justify-content: space-around;
        width: 55px;
    }
    .ranking-play,
    .ranking-collect {
        width: 22px;
        height: 22px;
        background: url(${sprite2}) no-repeat -267px -205px;
    }
    .ranking-play {
        &:hover {
            background-position-y: -235px;
        }
    }
    .ranking-collect {
        background-position: -299px -205px;
        &:hover {
            background-position-y: -235px;
        }
    }
`;
export const RankingListBottom = styled.dd`
    .ranking-item {
        display: flex;
        padding-left: 10px;
        justify-content: space-between;
        line-height: 32px;
        .item-left {
            display: flex;
        }
        &:hover {
            .operate {
                display: flex;
            }
            .item-link {
                max-width: 120px;
            }
        }
    }
    .ranking-identifier {
        text-align: center;
        font-size: 16px;

        width: 32px;
        height: 32px;
    }
    .ranking-top {
        color: #c10d0c;
    }
    .item-link {
        line-height: 32px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        &:hover {
            text-decoration: underline;
        }
    }
    .operate {
        display: none;
        align-items: center;
        width: 56px;
        justify-content: space-between;
        margin-right: 10px;
    }
    .playing {
        width: 17px;
        height: 17px;
        background: url(${sprite2}) no-repeat -267px -268px;
        &:hover {
            background-position-y: -288px;
        }
    }
    .add-playlist {
        background: url(${spriteIcon2}) no-repeat 0 -700px;
        width: 13px;
        height: 13px;
        &:hover {
            background-position-x: -22px;
        }
    }
    .collect {
        width: 16px;
        height: 14px;
        background: url(${sprite2}) no-repeat -297px -270px;
        &:hover {
            background-position-y: -290px;
        }
    }
`;
