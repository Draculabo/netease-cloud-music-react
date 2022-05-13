import { formatToMinuteSecond, useSelector } from "@/utils";
import { Slider } from "antd";
import { memo, useCallback, useEffect, useRef, useState } from "react";
import { shallowEqual } from "react-redux";
import {
    AudioOperate,
    MusicImage,
    PlayOperate,
    PlayToolContainer,
    PlayToolWrapper,
    SongOperate,
} from "./style";
export const PlayTool = memo(() => {
    const player = useSelector(state => state.player, shallowEqual);
    const audioRef = useRef<HTMLAudioElement | null>(null);
    // 是否在播放
    const [playing, setPlaying] = useState(false);
    // 当前进度条长度
    const [progress, setProgress] = useState(0);
    // 当前播放时间
    const [currentTime, setCurrentTime] = useState(0);
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
    const setDurationEvent = () => {
        if (audioRef.current !== null) {
            setDuration(audioRef.current.duration * 1000);
        }
    };
    /**
     * 控制音频是否播放
     */
    const playAction = () => {
        if (audioRef.current !== null) {
            if (audioRef.current.paused) {
                audioRef.current.play();
                setPlaying(true);
            } else {
                audioRef.current.pause();
                setPlaying(false);
            }
        }
    };
    /**
     * 音频播放事件
     */
    const playingEvent = () => {
        if (audioRef.current !== null) {
            if (!dragging) {
                setCurrentTime(audioRef.current.currentTime * 1000);
                setProgress(
                    Math.floor((audioRef.current.currentTime / audioRef.current.duration) * 100),
                );
            }
        }
    };
    /**
     * 拖拽进度条
     */
    const sliderChange = useCallback(
        (value: number) => {
            setDragging(true);
            setProgress(value);
            setCurrentTime((value * duration) / 100);
        },
        [duration],
    );
    /**
     * 拖拽进度条抬起后
     */
    const sliderAfterChange = useCallback(
        (value: number) => {
            if (audioRef.current !== null) {
                const currentTime = (value * duration) / 100;
                audioRef.current.currentTime = currentTime / 1000;
                setCurrentTime(currentTime);
                setDragging(false);
                if (audioRef.current.paused) {
                    audioRef.current.play();
                    setPlaying(true);
                }
            }
        },
        [duration, audioRef],
    );
    return (
        <PlayToolContainer>
            <PlayToolWrapper className="wrap-v2">
                <PlayOperate>
                    <a href="#" className="prev"></a>
                    <a
                        href="#"
                        className={playing ? "play-btn pause" : "play-btn play"}
                        onClick={playAction}
                    ></a>
                    <a href="#" className="next"></a>
                </PlayOperate>
                <MusicImage url={player.currentDetail?.imageUrl} />
                <div className="play-center">
                    <div className="play-info">
                        <a href="#" className="song-name">
                            Nocturne No. 2 in E Flat Major, Op. 9, No. 2
                        </a>
                        <a href="#" className="song-author">
                            Arthur Rubinstein
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
                                {formatToMinuteSecond(currentTime)}
                            </span>{" "}
                            {" / "}
                            <span className="duration">{formatToMinuteSecond(duration)}</span>
                        </div>
                    </div>
                </div>
                <div className="bar-operate">
                    <SongOperate>
                        <a href="#" className="pip"></a>
                        <a href="#" className="collect"></a>
                        <a href="#" className="share"></a>
                    </SongOperate>
                    <AudioOperate>
                        <a className="volume" href="#"></a>
                        <a href="#" className="play-mode repeat"></a>
                        <a href="#" className="play-list">
                            33
                        </a>
                    </AudioOperate>
                </div>
                <audio
                    ref={audioRef}
                    src={player.currentDetail?.playUrl}
                    onTimeUpdate={playingEvent}
                />
            </PlayToolWrapper>
        </PlayToolContainer>
    );
});
