import { memo } from "react";
import { PlayListItem, PlayListWrapper } from "./playlist.style";
import { useSelector } from "../../utils/hooks/useSelector";
import { shallowEqual } from "react-redux";
import { playerAction } from "../../stores/player/slice";
import { formatToMinuteSecond, useDispatch } from "@/utils";
import { useToggleMusic, useTogglePLDisplay } from "@/utils/hooks";
import { SongOfPlaylistType, SongDetail } from "@/stores/player";
interface PlSelectorType {
    playList: SongOfPlaylistType[];
    playListDisplay: boolean;
    currentSongId: number;
    currentSong: SongDetail;
}
const PlayList = memo(() => {
    const dispatch = useDispatch();
    const togglePl = useTogglePLDisplay();
    const toggleMusic = useToggleMusic();
    const plObj = useSelector<PlSelectorType>(state => {
        return {
            playList: state.player.playList,
            playListDisplay: state.player.playListShow,
            currentSongId: state.player.currentSong.id,
            currentSong: state.player.currentSong,
        };
    }, shallowEqual);

    return (
        <PlayListWrapper className={plObj.playListDisplay ? "block" : "hidden"}>
            <div className="play-list-header">
                <div className="header-left">
                    <div className="title">播放列表({plObj?.playList?.length})</div>
                    <div className="btns">
                        <div className="save-all-btn">
                            <span className="save-all-btn-icon"></span>
                            <span className="text">收藏全部</span>
                        </div>
                        <span className="splite-line"></span>
                        <div
                            className="clear-btn"
                            onClick={() => dispatch(playerAction.setPlayList([]))}
                        >
                            <span className="clear-btn-icon"></span>
                            <span className="text">清除</span>
                        </div>
                    </div>
                </div>
                <div className="header-right">
                    <div className="song-name">{plObj?.currentSong?.title}</div>
                    <div className="close-btn" onClick={togglePl}></div>
                </div>
            </div>
            <div className="play-list-content">
                <div className="play-list-content-left">
                    {(plObj?.playList || []).length > 0 ? (
                        <div className="play-list">
                            {plObj?.playList?.map((track, i) => {
                                return (
                                    <PlayListItem key={`${track.id}-${i}`}>
                                        <div
                                            className={`playing-icon ${
                                                plObj.currentSongId === track.id ? "active" : ""
                                            }`}
                                            onClick={() => toggleMusic(i)}
                                        ></div>
                                        <div className="song-name" onClick={() => toggleMusic(i)}>
                                            {track.name}
                                        </div>
                                        <div className="operator-container"></div>
                                        <div
                                            className="singers text-nowrap"
                                            title={plObj?.currentSong?.author
                                                ?.map(ar => ar.name)
                                                .join("/")}
                                        >
                                            {track?.author?.map((ar, i) => (
                                                <span key={`${ar.id}-${i}`}>{ar.name}</span>
                                            ))}
                                        </div>
                                        <div
                                            className="duration"
                                            onClick={() => () => toggleMusic(i)}
                                        >
                                            {formatToMinuteSecond(track.duration)}
                                        </div>
                                        <div className="goto-btn"></div>
                                    </PlayListItem>
                                );
                            })}
                        </div>
                    ) : (
                        "你还没有添加任何歌曲"
                        // <NoData text="你还没有添加任何歌曲"></NoData>
                    )}
                </div>
                <div className="play-list-content-right">
                    <div className="lyric-list">
                        {(plObj.currentSong?.lyrics || [])?.map((item, index) => {
                            return (
                                <div className="lyric-line" key={`${item.time}-{index}`}>
                                    <p
                                        className={`${
                                            plObj.currentSong.currentLyric === index ? "active" : ""
                                        }`}
                                    >
                                        {item.content}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </PlayListWrapper>
    );
});
export default PlayList;
