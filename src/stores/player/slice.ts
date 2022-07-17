import { getPlayListDetail } from "@/services";
import { getlyric, getMusicDetail, getMusicUrl } from "@/services/player";
import { parseLyric } from "@/utils/lyric-parse";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PlayerState } from "./types";

export const getMusicUrlThunk = createAsyncThunk(`player/getMusicUrl`, async (id: number) => {
    const { data } = await getMusicUrl({ id });
    return data;
});
export const getMusicDetailThunk = createAsyncThunk(`player/getMusicDetail`, async (id: number) => {
    const data = await getMusicDetail({ id });

    return data;
});
export const getLyricThunk = createAsyncThunk(`player/getLyric`, async (id: number) => {
    const data = await getlyric({ id });
    return data;
});
export const getPlayListThunk = createAsyncThunk(`player/getPlayList`, async (id: number) => {
    const data = await getPlayListDetail(id.toString());
    return data;
});
const initialState: PlayerState = {
    loading: false,
    error: "",
    playList: [],
    playListShow: false,
    volumeShow: false,
    playing: false,
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
        addPlayList(state, { payload }) {
            if (state.playList.find(value => value.id === payload.id)) {
                return;
            }
            if (typeof payload === "number") {
                state.playList.push({
                    id: payload,
                    name: state.currentSong.title,
                    author: state.currentSong.author,
                    duration: state.currentSong.duration,
                });
            } else {
                state.playList.push(payload);
            }
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
        setLyricInex(state, { payload }) {
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
            state.playList = [
                ...(payload?.playlist?.tracks?.map(value => {
                    return {
                        id: value.id,
                        name: value.name,
                        author: value.ar,
                        duration: value.dt,
                    };
                }) ?? []),
            ];
        },
    },
});

export const playerReducer = playerSlice.reducer;

export const playerAction = playerSlice.actions;
