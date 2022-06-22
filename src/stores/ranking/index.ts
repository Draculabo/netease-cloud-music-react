import { getTopList } from "@/services";
import { request } from "@/utils";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface RankingState {
    loading: boolean;
    error: string;
    rankingList: any[];
}
const initialState: RankingState = {
    loading: true,
    error: "",
    rankingList: [],
};
const getRankings = createAsyncThunk("ranking/getRankings", async (args, thunkAPI) => {
    const data = await getTopList();
});
const rankingSlice = createSlice({
    initialState,
    name: "ranking",
    reducers: {},
    extraReducers: {},
});
export const rankingActions = rankingSlice.actions;
export const rankingReducers = rankingSlice.reducer;
