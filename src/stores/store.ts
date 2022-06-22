import { configureStore, MiddlewareArray } from "@reduxjs/toolkit";
import { rootReducer } from "./reducers";
import reduxLogger from "redux-logger";
import { CurriedGetDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware";

/**
 * 配置中间件
 * @param getDefaultMiddleware 默认中间件
 * @returns  中间件数组
 */
const configMiddleware = (getDefaultMiddleware: CurriedGetDefaultMiddleware<any>) => {
    const middleware = getDefaultMiddleware();
    if (process.env.NODE_ENV === "dev") {
        middleware.push(reduxLogger);
    }
    return middleware;
};
/**
 * 配置store仓库
 */
export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => configMiddleware(getDefaultMiddleware),
    devTools: true,
});
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
