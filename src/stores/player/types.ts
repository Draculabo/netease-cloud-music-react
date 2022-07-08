export interface LyricType {
    time: number;
    content: string;
}
export interface SongOfPlaylistType {
    id: number;
    name: string;
    author: any[];
    duration: number;
}
/**
 * 歌曲详情
 */
export interface SongDetail {
    id: number;
    imageUrl: string;
    playUrl: string;
    title: string;
    author: any[];
    lyrics: LyricType[];
    duration: number;
    currentLyric: number;
    currentTime: number;
}
/**
 * 播放器状态
 */
export interface PlayerState {
    loading: boolean;
    error: string;
    playList: SongOfPlaylistType[];
    playListShow: boolean;
    volumeShow: boolean;
    playing: boolean;
    currentSongIndex: number;
    currentSong: SongDetail;
}
