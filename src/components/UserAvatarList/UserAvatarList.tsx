import React from "react";
import { Link } from "react-router-dom";
import { linkToUserHomePage } from "@/utils/link";
import { UserAvatarListWrapper } from "@/components/UserAvatarList/UserAvatarList.style";

type UserAvatarListPropsType = {
    subscribers: Profile[];
};

export interface Profile {
    nickname: string;
    avatarUrl: string;
    birthday: string;
    gender: number;
    province: number;
    city: number;
    backgroundUrl: string;
    createTime: number;
    userId: number;
    signature: string;
    followeds: number;
    follows: number;
    eventCount: number;
    playlistCount: number;
}

function UserAvatarList(props: UserAvatarListPropsType) {
    const subscribers = props.subscribers || [];
    return (
        <UserAvatarListWrapper>
            <div className="user-avatar-list">
                {subscribers.map(user => {
                    return (
                        <div className="user-avatar-item" key={user.userId} title={user.nickname}>
                            <Link to={linkToUserHomePage(user.userId)}>
                                <img src={user.avatarUrl} alt={user.nickname} />
                            </Link>
                        </div>
                    );
                })}
            </div>
        </UserAvatarListWrapper>
    );
}

export default UserAvatarList;
