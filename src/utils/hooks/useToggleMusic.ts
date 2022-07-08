import { useDispatch, useSelector, usePlayMusic } from "./index";
import { playerAction } from "@/stores/player";

/**
 * 切换歌曲
 */
const useToggleMusic = () => {
    const playMusic = usePlayMusic();
    const dispatch = useDispatch();
    const { playList } = useSelector(state => state.player);
    return (index: number) => {
        if (index < -1 || index > playList.length + 1) {
            throw new Error("播放列表越界");
        }
        let tIndex = index;
        if (index === -1) {
            tIndex = playList.length - 1;
        } else if (index === playList.length) {
            tIndex = 0;
        }
        const id = playList[tIndex]?.id;
        dispatch(playerAction.setCurrentSongIndex(tIndex));
        playMusic(id);
    };
};
export default useToggleMusic;
