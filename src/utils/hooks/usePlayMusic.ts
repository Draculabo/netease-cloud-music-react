import {
    getLyricThunk,
    getMusicDetailThunk,
    getMusicUrlThunk,
    playerAction,
} from "@/stores/player";
import { useDispatch } from "react-redux";

/**
 * 播放歌曲
 * @returns A function that takes an id and dispatches three actions.
 */
const usePlayMusic = () => {
    const dispatch = useDispatch();
    return (id: number) => {
        dispatch(getMusicUrlThunk(id));
        dispatch(getMusicDetailThunk(id));
        dispatch(getLyricThunk(id));
        dispatch(playerAction.setSongId({ id }));
    };
};
export default usePlayMusic;
