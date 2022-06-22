import styled from "styled-components";

export const RankingListItem = styled.a`
    display: flex;
    width: 100%;
    background: #fafafa;
    padding: 10px;
    &:hover {
        text-decoration: none;
        background: #f4f2f2;
    }
    img {
        width: 40px;
        height: 40px;
    }
    .info {
        padding-left: 10px;
    }
`;
