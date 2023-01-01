import { combineReducers } from "@reduxjs/toolkit";
import { playerReducer } from "./player/slice";
export const rootReducer = combineReducers({
    player: playerReducer,
    // chart: chartReducer,
});
