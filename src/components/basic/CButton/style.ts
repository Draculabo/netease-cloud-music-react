import styled from "styled-components";

import spriteButton from "@/assets/img/sprite_button.png";
export const CButtonWrapper = styled.button`
    position: relative;
    background: url(${spriteButton}) no-repeat 0 -977px;
    height: 31px;
    padding: 0 10px 0 30px;
    line-height: 31px;
    cursor: pointer;
    &::after {
        position: absolute;
        content: "";
        top: 0;
        right: -1px;
        width: 8px;
        background: url(${spriteButton}) no-repeat -242px -1020px;
        height: 31px;
    }
`;
