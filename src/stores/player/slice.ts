import { getPlayListDetail } from "@/services";
import { getLyric, getMusicDetail, getMusicUrl } from "@/services/player";
import { parseLyric } from "@/utils/lyric-parse";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PlayerState, SongOfPlaylistType } from "./types";
import { AddPlayListEnum } from "@/utils/hooks/useAddPlayList";
import { equals, uniqWith } from "ramda";

export const getMusicUrlThunk = createAsyncThunk(`player/getMusicUrl`, async (id: number) => {
    const { data } = await getMusicUrl({ id });
    return data;
});
export const getMusicDetailThunk = createAsyncThunk(`player/getMusicDetail`, async (id: number) => {
    return getMusicDetail({ id });
});
export const getLyricThunk = createAsyncThunk(`player/getLyric`, async (id: number) => {
    return getLyric({ id });
});
export const getPlayListThunk = createAsyncThunk(`player/getPlayList`, async (id: number) => {
    return getPlayListDetail(id.toString());
});
export const mapPlaylist = res => {
    if (!res) {
        return [];
    }
    return [
        ...(res?.playlist?.tracks?.map(value => {
            return {
                id: value.id,
                name: value.name,
                author: value.ar,
                duration: value.dt,
            };
        }) ?? []),
    ];
};
const initialState: PlayerState = {
    loading: false,
    error: "",
    playList: [],
    playListShow: false,
    volumeShow: false,
    playing: false,
    playlistStatus: AddPlayListEnum.AppendPlayList,
    currentSongIndex: 0,
    currentSong: {
        id: 0,
        playUrl: "",
        imageUrl: "",
        title: "",
        author: [],
        duration: 0,
        lyrics: [],
        currentLyric: 0,
        currentTime: 0,
    },
};

const playerSlice = createSlice({
    name: "player",
    initialState,
    reducers: {
        play(state) {
            state.playing = true;
        },
        pause(state) {
            state.playing = false;
        },
        setSongId(
            state,
            {
                payload,
            }: PayloadAction<{
                id: number;
            }>,
        ) {
            state.currentSong.id = payload?.id;
        },
        setPlaylistStatus(state, { payload }: PayloadAction<AddPlayListEnum>) {
            state.playlistStatus = payload;
        },
        addPlayList(state, { payload }: PayloadAction<SongOfPlaylistType | SongOfPlaylistType[]>) {
            // 歌曲数组
            if (Array.isArray(payload)) {
                state.playList = uniqWith<SongOfPlaylistType, unknown>((a, b) => {
                    return equals(a, b);
                })([...state.playList, ...payload]);
            }
            // 歌曲
            else {
                if (state.playList.find(s => s.id === payload.id)) {
                    return;
                }
                state.playList.push(payload);
            }
        },
        replacePlayList(state, { payload }: PayloadAction<SongOfPlaylistType[]>) {
            state.playList = [...payload];
        },
        setPlayList(state, { payload }) {
            state.playList = payload;
        },
        togglePlayListDisplay(state) {
            state.playListShow = !state.playListShow;
        },
        toggleVolumeDisplay(state) {
            state.volumeShow = !state.volumeShow;
        },
        setLyricIndex(state, { payload }) {
            state.currentSong.currentLyric = payload;
        },
        setCurrentTime(state, { payload }) {
            state.currentSong.currentTime = payload;
        },
        setCurrentSongIndex(state, { payload }) {
            state.currentSongIndex = payload;
        },
    },
    extraReducers: {
        [getMusicUrlThunk.pending.type](state) {
            state.playing = false;
        },
        [getMusicUrlThunk.fulfilled.type](state, { payload }) {
            if (state.currentSong !== null) {
                state.currentSong.playUrl = payload && payload[0]?.url;
                state.playing = true;
            }
        },
        [getMusicDetailThunk.fulfilled.type](state, { payload }) {
            if (state.currentSong !== null) {
                state.currentSong.title = payload?.songs[0]?.name;
                state.currentSong.author = payload?.songs[0]?.ar;
                state.currentSong.imageUrl = payload?.songs[0]?.al?.picUrl;
            }
        },
        [getLyricThunk.fulfilled.type](state, { payload }) {
            if (state.currentSong !== null) {
                state.currentSong.lyrics = parseLyric(payload?.lrc?.lyric);
            }
        },
        [getPlayListThunk.fulfilled.type](
            state,
            {
                payload,
            }: PayloadAction<{
                playlist: {
                    tracks: any[];
                };
            }>,
        ) {
            state.playList = [...mapPlaylist(payload)];
        },
    },
});

export const playerReducer = playerSlice.reducer;

export const playerAction = playerSlice.actions;
