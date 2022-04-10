import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { chartReducer, recommendReducer } from "../stores";
const rootReducer = combineReducers({
    recommend: recommendReducer,
    // chart: chartReducer,
});
export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => [...getDefaultMiddleware()],
    devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
