import { getPlayListDetail } from "@/services";
import { getPlayListThunk, mapPlaylist, playerAction } from "@/stores/player";
import { SongOfPlaylistType } from "@/stores/player/types";
import { useUpdateEffect } from "ahooks";
import { shallowEqual, useDispatch } from "react-redux";
import useSelector from "./useSelector";
import usePlayMusic from "@/utils/hooks/usePlayMusic";

export const enum AddPlayListEnum {
    AppendPlayList,
    ReplacePlayList,
}

type AddPlaylistType = SongOfPlaylistType | number | undefined;
/**
 * 添加到播放列表
 * @returns A function that takes a parameter of type SongOfPlayListType | number and returns void.
 */
const useAddPlayList = () => {
    const dispatch = useDispatch();
    const playMusic = usePlayMusic();
    const { playList, playlistStatus } = useSelector(state => state.player, shallowEqual);
    // 当播放列表发生更新时执行
    useUpdateEffect(() => {
        // 播放歌单 默认播放第一首歌曲
        if (playList.length !== 0 && playlistStatus === AddPlayListEnum.ReplacePlayList) {
            playMusic(playList[0]?.id);
            dispatch(playerAction.setPlaylistStatus(AddPlayListEnum.AppendPlayList));
        }
    }, [playList, playlistStatus, playMusic]);
    return {
        addPlayList(param: AddPlaylistType) {
            if (param === undefined) {
                return;
            }
            dispatch(playerAction.setPlaylistStatus(AddPlayListEnum.AppendPlayList));
            // 歌单
            if (typeof param === "number") {
                getPlayListDetail(param.toString()).then((res: any) => {
                    dispatch(playerAction.addPlayList(mapPlaylist(res)));
                });
            }
            // 歌曲
            else {
                dispatch(playerAction.addPlayList(param));
            }
        },
        replacePlayList(param: AddPlaylistType) {
            if (param === undefined) {
                return;
            }
            dispatch(playerAction.setPlaylistStatus(AddPlayListEnum.ReplacePlayList));
            // 歌单
            if (typeof param === "number") {
                dispatch(getPlayListThunk(param));
            }
            // 歌曲
            else {
                dispatch(playerAction.replacePlayList([param]));
            }
        },
    };
};
export default useAddPlayList;
