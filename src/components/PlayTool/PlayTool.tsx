import { playerAction } from "@/stores/player";
import { useDispatch, useSelector, useToggleMusic, useTogglePLDisplay } from "@/utils/hooks";
import { formatToMinuteSecond } from "@/utils";
import { Slider } from "antd";
import { memo, useCallback, useEffect, useRef, useState } from "react";
import { shallowEqual } from "react-redux";
import PlayList from "./PlayList";
import {
    AudioOperate,
    MusicImage,
    PlayOperate,
    PlayToolContainer,
    PlayToolWrapper,
    SongOperate,
} from "./style";
import VolumeSlider from "../basic/VolumeSlider/VolumeSlider";

export const PlayTool = memo(() => {
    const player = useSelector(state => state.player, shallowEqual);
    const dispatch = useDispatch();
    const togglePl = useTogglePLDisplay();
    const toggleMusic = useToggleMusic();

    const [volume, setVolume] = useState(0.2);
    const audioRef = useRef<HTMLAudioElement | null>(null);
    // 当前进度条长度
    const [progress, setProgress] = useState(0);
    // 歌曲长度
    const [duration, setDuration] = useState(0);
    // 是否拖拽进度条
    const [dragging, setDragging] = useState(false);
    useEffect(() => {
        if (audioRef.current !== null) {
            // 注册事件
            audioRef.current.addEventListener("canplay", setDurationEvent);
        }
        return () => {
            audioRef.current?.removeEventListener("canplay", setDurationEvent);
        };
    }, []);
    /* 在播放器播放时播放音频。 */
    useEffect(() => {
        if (audioRef.current !== null && player.playing) {
            audioRef.current.play();
        }
    }, [audioRef, player.playing]);
    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = volume;
        }
    }, [volume]);
    /**
     *  拖拽音量播放条
     */
    const volumeChangeHandler = value => {
        const volumeRate = value / 100;
        if (volumeRate > 0.01 && volumeRate <= 1) {
            setVolume(volumeRate);
        } else if (volumeRate <= 0.01) {
            setVolume(0);
        } else {
            setVolume(1);
        }
    };
    /**
     * 加载音频元素时，将音频元素的持续时间设置为状态变量持续时间。
     */
    const setDurationEvent = useCallback(() => {
        if (audioRef.current !== null) {
            setDuration(audioRef.current.duration * 1000);
        }
    }, [audioRef]);
    /**
     * 控制音频是否播放
     */
    const changePlayAction = useCallback(() => {
        if (audioRef.current !== null) {
            if (audioRef.current.paused) {
                audioRef.current.play();
                dispatch(playerAction.play());
            } else {
                audioRef.current.pause();
                dispatch(playerAction.pause());
            }
        }
    }, [audioRef, dispatch]);
    /**
     * 滑动歌词效果
     */
    const setActiveLyric = useCallback(() => {
        const currentSong = player.currentSong;
        const time = currentSong?.currentTime;
        const index = currentSong?.lyrics.findIndex((item, i) => {
            const seconds = item.time || 0;
            const duration = currentSong?.lyrics[i + 1]?.time ?? 0;
            // 提前500ms滑动歌词
            return time >= seconds - 500 && time < duration - 500;
        });
        dispatch(playerAction.setLyricIndex(index));
    }, [audioRef, player.currentSong?.lyrics, player.currentSong?.currentTime]);
    /**
     * 音频播放事件
     */
    const playingEvent = useCallback(() => {
        if (audioRef.current !== null) {
            if (!dragging) {
                dispatch(playerAction.setCurrentTime(audioRef.current.currentTime * 1000));
                setProgress(
                    Math.floor((audioRef.current.currentTime / audioRef.current.duration) * 100),
                );
                setActiveLyric();
            }
        }
    }, [audioRef, dragging, dispatch, setActiveLyric]);

    /**
     * 拖拽进度条
     */
    const sliderChange = useCallback(
        (value: number) => {
            setDragging(true);
            setProgress(value);
            dispatch(playerAction.setCurrentTime((value * duration) / 100));
            setActiveLyric();
        },
        [duration, dispatch],
    );
    /**
     * 拖拽进度条抬起后
     */
    const sliderAfterChange = useCallback(
        (value: number) => {
            if (audioRef.current !== null) {
                const currentTime = (value * duration) / 100;
                audioRef.current.currentTime = currentTime / 1000;
                dispatch(playerAction.setCurrentTime(currentTime));
                setDragging(false);
                if (audioRef.current.paused && !audioRef.current.src) {
                    audioRef.current.play();
                    dispatch(playerAction.play());
                }
            }
        },
        [duration, audioRef],
    );
    return (
        <PlayToolContainer>
            <PlayList />
            <PlayToolWrapper className="wrap-v2">
                <PlayOperate>
                    <a
                        href="#"
                        className="prev"
                        onClick={() => toggleMusic(player.currentSongIndex - 1)}
                    />
                    <a
                        href="#"
                        className={player.playing ? "play-btn pause" : "play-btn play"}
                        onClick={changePlayAction}
                    />

                    <a
                        href="#"
                        className="next"
                        onClick={() => toggleMusic(player.currentSongIndex + 1)}
                    />
                </PlayOperate>
                <MusicImage url={player.currentSong?.imageUrl} />
                <div className="play-center">
                    <div className="play-info">
                        <a href="#" className="song-name">
                            {player.currentSong?.title}
                        </a>
                        <a href="#" className="song-author">
                            {player.currentSong?.author?.map(ar => ar.name).join("/")}
                        </a>
                    </div>
                    <div className="play-bar">
                        <Slider
                            tooltipVisible={false}
                            defaultValue={0}
                            value={progress}
                            onChange={sliderChange}
                            onAfterChange={sliderAfterChange}
                        />
                        <div className="time">
                            <span className="current-time">
                                {formatToMinuteSecond(player.currentSong?.currentTime)}
                            </span>{" "}
                            {" / "}
                            <span className="duration">{formatToMinuteSecond(duration)}</span>
                        </div>
                    </div>
                </div>
                <div className="bar-operate">
                    <SongOperate>
                        <a href="#" className="pip" />
                        <a href="#" className="collect" />
                        <a href="#" className="share" />
                    </SongOperate>
                    <AudioOperate>
                        <VolumeSlider
                            vertical={true}
                            value={volume * 100}
                            total={100}
                            defaultValue={30}
                            className={player.volumeShow ? "block" : "hidden"}
                            onChange={volumeChangeHandler}
                        />

                        <a
                            className="volume"
                            href="#"
                            onClick={e => {
                                e.preventDefault();
                                dispatch(playerAction.toggleVolumeDisplay());
                            }}
                        />
                        <a href="#" className="play-mode repeat" />
                        <a href="#" className="play-list" onClick={togglePl}>
                            {player.playList?.length}
                        </a>
                    </AudioOperate>
                </div>
                <audio
                    ref={audioRef}
                    src={player.currentSong?.playUrl}
                    onTimeUpdate={playingEvent}
                    onEnded={() => {
                        toggleMusic(player.currentSongIndex + 1);
                    }}
                />
            </PlayToolWrapper>
        </PlayToolContainer>
    );
});
