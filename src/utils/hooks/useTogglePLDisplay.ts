import { playerAction } from "@/stores/player";
import { useDispatch } from "react-redux";

/**
 * 切换播放列表显示状态
 * @returns
 */
const useTogglePLDisplay = () => {
    const dispatch = useDispatch();
    return () => {
        dispatch(playerAction.togglePlayListDisplay());
    };
};
export default useTogglePLDisplay;
