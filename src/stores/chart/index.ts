import { createSlice } from "@reduxjs/toolkit";
// 1. 定义接口
export interface ChartState {
    loading: boolean;
    error: string;
}

// 2. 定义初始状态
const initialState: ChartState = {
    loading: false,
    error: "",
};
// 3. 创建slice
const chartSlice = createSlice({
    name: "chart",
    initialState,
    reducers: {},
    extraReducers: {},
});
// 4. 导出
export const chartActions = chartSlice.actions;
export const chartReducer = chartSlice.reducer;
