import React from "react";
import { Link } from "react-router-dom";
import { IPlayListDetail } from "@/typings";
import { formatCount, formatToYMS } from "../../utils";
import { linkToPlaylistPageByCat, linkToUserHomePage } from "@/utils/link";
import { useAddPlayList } from "@/utils/hooks";
import { PlaylistBaseInfoWrapper } from "./PlaylistBaseInfo.style";
import { OperateWrapper } from "../Discover/Ranking/components/RankingInformation/style";
import { CButton } from "@/components";

type PlaylistBaseInfoPropsType = {
    playlistBaseInfo: IPlayListDetail | undefined;
};

function PlaylistBaseInfo(props: PlaylistBaseInfoPropsType) {
    const { playlistBaseInfo } = props;

    const { addPlayList, replacePlayList } = useAddPlayList();
    return (
        <PlaylistBaseInfoWrapper>
            <div className="playlist-img">
                <img src={playlistBaseInfo?.coverImgUrl} alt={"歌单图片"} />
                <div className="mask" />
            </div>
            <div className="info-field">
                <div className="title">
                    <div className="icon" />
                    <div className="text">{playlistBaseInfo?.name}</div>
                </div>
                <div className="creator-date">
                    <div className="creator">
                        <Link
                            className="block-a"
                            to={linkToUserHomePage(playlistBaseInfo?.creator?.userId)}
                        >
                            <img
                                alt={"头像"}
                                className={"avatar"}
                                src={playlistBaseInfo?.creator.avatarUrl}
                            />
                        </Link>
                        <div className="name text-decoration">
                            <Link to={linkToUserHomePage(playlistBaseInfo?.creator?.userId)}>
                                {playlistBaseInfo?.creator.nickname}
                            </Link>
                        </div>
                    </div>
                    <div className="date">
                        {formatToYMS(playlistBaseInfo?.createTime)}
                        <span>创建</span>
                    </div>
                </div>
                <OperateWrapper>
                    <CButton
                        className="playing"
                        text="播放"
                        onClick={() => {
                            () => replacePlayList(playlistBaseInfo?.id);
                        }}
                    />
                    <button
                        className="add-playing"
                        onClick={() => {
                            addPlayList(playlistBaseInfo?.id);
                        }}
                    />
                    <CButton
                        className="collect-btn"
                        text={"(" + formatCount(playlistBaseInfo?.subscribedCount) + ")"}
                    />
                    <CButton
                        className="share"
                        text={"(" + formatCount(playlistBaseInfo?.shareCount) + ")"}
                    />
                    <CButton className="download" text="下载" />
                    <CButton
                        className="comment"
                        text={"(" + formatCount(playlistBaseInfo?.commentCount) + ")"}
                    />
                </OperateWrapper>
                <div className="tags-container">
                    <div className="label">标签:</div>
                    <div className="tag-list">
                        {playlistBaseInfo?.tags.map((tag: string, index: number) => (
                            <div className="tag-item" key={index}>
                                <span>
                                    <Link to={linkToPlaylistPageByCat(tag)}>{tag}</Link>
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="description clearfix">
                    <div className="label">介绍:</div>
                    <div className="text">{playlistBaseInfo?.description}</div>
                </div>
            </div>
        </PlaylistBaseInfoWrapper>
    );
}

export default PlaylistBaseInfo;
