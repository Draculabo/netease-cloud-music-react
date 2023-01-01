import styled from "styled-components";

export const UserAvatarListWrapper = styled.div`
    margin: 20px 0 10px 0;

    .user-avatar-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        .user-avatar-item {
            margin-left: 12px;
            margin-bottom: 10px;
            cursor: pointer;
            img {
                width: 40px;
                height: 40px;
            }
        }

        .user-avatar-item:nth-of-type(4n + 1) {
            margin-left: 0;
        }
    }
`;
