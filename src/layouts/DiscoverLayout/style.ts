import styled from "styled-components";

export const DiscoverTabWrapper = styled.div`
    height: 35px;
    .wrap-v2 {
        display: flex;
        align-items: center;
        padding-left: 100px;
        height: inherit;
    }
    .active {
        background-color: #9b0909;
    }
    a {
        color: #eee;
        padding: 0px 20px;
        border: 1px solid transparent;
        border-radius: 25px;
        margin-bottom: 5px;
        &:first-child {
            margin-left: 30px;
        }
        &:hover {
            background-color: #9b0909;
            text-decoration: none;
        }
    }
`;
