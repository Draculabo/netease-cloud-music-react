import styled from "styled-components";
export const AnchorWrapper = styled.div`
    padding: 10px;
`;
export const AnchorItem = styled.a`
    display: flex;
    height: 40px;
    margin-bottom: 10px;
    background-color: #fafafa;
    &:hover {
        text-decoration: none;
    }
    img {
        width: 40px;
    }
    .info {
        padding-left: 10px;
        width: 170px;
    }
    .description {
        color: #333;
    }
`;
