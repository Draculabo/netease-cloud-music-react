import styled from "styled-components";

export const TitleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 34px;
    border-bottom: 1px solid #ccc;
    margin-bottom: 20px;

    .title {
        color: #333;
        font-weight: bold;
    }

    .more-link {
        a {
            color: #666;
        }
    }
`;
