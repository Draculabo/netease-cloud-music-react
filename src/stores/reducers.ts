import { combineReducers } from "@reduxjs/toolkit";
import { recommendReducer } from "../stores";
import { playerReducer } from "./player/slice";
export const rootReducer = combineReducers({
    recommend: recommendReducer,
    player: playerReducer,
    // chart: chartReducer,
});
