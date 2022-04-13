import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { request } from "@/utils/";
export interface RecommendState {
    loading: boolean;
    error: string;
    banners: any[];
}
const initialState: RecommendState = {
    loading: false,
    error: "",
    banners: [],
};
export const getBanners = createAsyncThunk("recommend/getBanners", async () => {
    const data: any = await request({
        url: "/banner",
        method: "get",
    });
    return data.banners;
});
const recommendSlice = createSlice({
    name: "recommend",
    initialState,
    reducers: {},
    extraReducers: {
        [getBanners.pending.type]: state => {
            state.loading = true;
        },
        [getBanners.fulfilled.type]: (state, action) => {
            state.loading = false;

            state.banners = action.payload;
        },
        [getBanners.rejected.type]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});
export const recommendActions = recommendSlice.actions;
export const recommendReducer = recommendSlice.reducer;
