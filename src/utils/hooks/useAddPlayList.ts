import { getPlayListDetail } from "@/services";
import { getPlayListThunk, playerAction } from "@/stores/player";
import { SongOfPlaylistType } from "@/stores/player/types";
import { useUpdateEffect } from "ahooks";
import { shallowEqual, useDispatch } from "react-redux";
import usePlayMusic from "./usePlayMusic";
import useSelector from "./useSelector";
const enum AddPlayList {
    AppendPlayList,
    ReplacePlayList,
}
/**
 * 添加到播放列表
 * @returns A function that takes a parameter of type SongOfplayListType | number and returns void.
 */
const useAddPlayList = () => {
    const dispatch = useDispatch();
    const playMusic = usePlayMusic();
    const playList = useSelector(state => state.player.playList, shallowEqual);
    // 当播放列表发生更新时执行
    useUpdateEffect(() => {
        // 播放歌单 默认播放第一首歌曲
        if (playList.length !== 0) {
            playMusic(playList[0]?.id);
        }
    }, [playList]);
    return (param: SongOfPlaylistType | number, operate = AddPlayList.ReplacePlayList) => {
        if (typeof param === "number") {
            switch (operate) {
                case AddPlayList.ReplacePlayList:
                    dispatch(getPlayListThunk(param));
                    break;
                default:
                    getPlayListDetail(param.toString());
                    dispatch(playerAction.addPlayList(param));
                    break;
            }
        } else {
            dispatch(playerAction.addPlayList(param));
        }
    };
};
export default useAddPlayList;
