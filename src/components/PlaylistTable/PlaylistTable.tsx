import { timestampParseDate } from "@/utils";
import useAddPlayList from "@/utils/hooks/useAddPlayList";
import { handleImageSize } from "@/utils/image";
import { Fragment, memo } from "react";

import {
    Operate,
    PlaylistCTable,
    PlaylistRow,
    PlaylistTableWrapper,
    PlaylistTitleWrapper,
    TDCenter,
} from "./style";

interface PlaylistTableProps {
    trackCount: number;
    playCount: number;
    list: any[];
}

export const PlaylistTable = memo<PlaylistTableProps>(({ trackCount, playCount, list }) => {
    const { addPlayList, replacePlayList } = useAddPlayList();

    return (
        <PlaylistTableWrapper>
            <PlaylistTitleWrapper>
                <div className="title-left">
                    <h2>歌曲列表</h2>
                    <span className="song-count">{trackCount || 0}首歌</span>
                </div>
                <div className="title right">
                    播放：<span className="play-count ">{playCount || 0}</span>次
                </div>
            </PlaylistTitleWrapper>
            <PlaylistCTable>
                <thead>
                    <tr>
                        <th className="index-head" />
                        <th>标题</th>
                        <th>时长</th>
                        <th>歌手</th>
                    </tr>
                </thead>
                <tbody>
                    {list?.map((l, i) => {
                        return (
                            <PlaylistRow key={l.id} className={i % 2 === 0 ? "even" : ""}>
                                <td>
                                    <div className="td-container td-index ">
                                        <span className="index">{i + 1}</span>
                                        <span className="new" />
                                    </div>
                                </td>
                                <td>
                                    <TDCenter className="td-container">
                                        {i < 3 ? (
                                            <a href="#" className="img-link">
                                                <img
                                                    src={handleImageSize({
                                                        url: l.al?.picUrl,
                                                        width: 40,
                                                        height: 40,
                                                    })}
                                                    alt=""
                                                />
                                            </a>
                                        ) : (
                                            ""
                                        )}
                                        <span
                                            onClick={() => {
                                                replacePlayList({
                                                    id: l.id,
                                                    name: l.name,
                                                    author: l.ar,
                                                    duration: l.dt,
                                                });
                                            }}
                                            className="playing btn"
                                        />
                                        <div className="ttc">
                                            <span className="txt text-nowrap">
                                                <a href="#">
                                                    <span title={l.al?.name}>{l.al?.name}</span>
                                                </a>
                                                <span title={l.alia[0]} className="s-fc8">
                                                    {l.alia[0]}
                                                </span>

                                                {l.mv !== 0 ? (
                                                    <span title="播放mv" className="mv">
                                                        MV
                                                    </span>
                                                ) : (
                                                    ""
                                                )}
                                            </span>
                                        </div>
                                    </TDCenter>
                                </td>
                                <td>
                                    <div className="td-container td-padding">
                                        <span className="song-duration">
                                            {timestampParseDate(l.dt, "mm:ss")}
                                        </span>
                                        <Operate className="operate">
                                            <span
                                                className="add-playing btn"
                                                onClick={() => {
                                                    addPlayList({
                                                        id: l.id,
                                                        name: l.name,
                                                        author: l.ar,
                                                        duration: l.dt,
                                                    });
                                                }}
                                            />
                                            <span className="collect btn" />
                                            <span className="share btn" />
                                            <span className="download btn" />
                                        </Operate>
                                    </div>
                                </td>
                                <td>
                                    <div
                                        className="author text-nowrap"
                                        title={l.ar?.map(a => a.name).join("/")}
                                    >
                                        {l.ar?.map((a, i, arr) => {
                                            return (
                                                <Fragment key={`${a.id}-i`}>
                                                    <a className="" href="#">
                                                        {a.name}
                                                    </a>
                                                    {i === arr.length - 1 ? "" : "/"}
                                                </Fragment>
                                            );
                                        })}
                                    </div>
                                </td>
                            </PlaylistRow>
                        );
                    })}
                </tbody>
            </PlaylistCTable>
        </PlaylistTableWrapper>
    );
});
