import { memo } from "react";
import { Navigate, RouteObject, useRoutes } from "react-router";
import { BasicLayout } from "./layouts";
import { DisCoverLayout } from "./layouts/DiscoverLayout";
import { Chart, Friend, Mine, NewSongs, PlayList, Radio, Recommend, Singer } from "./pages";
export const RenderRoute = memo(() => {
    const routes: RouteObject[] = [
        {
            path: "",

            element: <Navigate to={"/discover"} />,
        },
        {
            path: "/discover",

            element: <DisCoverLayout />,
            children: [
                {
                    index: true,
                    element: <Recommend />,
                },
                {
                    path: "recommend/*",
                    element: <Recommend />,
                },
                {
                    path: "chart/*",
                    element: <Chart />,
                },
                {
                    path: "playlist/*",
                    element: <PlayList />,
                },
                {
                    path: "radio/*",
                    element: <Radio />,
                },
                {
                    path: "singer/*",
                    element: <Singer />,
                },
                {
                    path: "newsongs/*",
                    element: <NewSongs />,
                },
            ],
        },
        {
            path: "/mine",
            element: (
                <BasicLayout>
                    <Mine />
                </BasicLayout>
            ),
        },
        {
            path: "/friend",
            element: (
                <BasicLayout>
                    <Friend />
                </BasicLayout>
            ),
        },
    ];
    return useRoutes(routes);
});
