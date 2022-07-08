import { lazy, memo, ReactNode, Suspense } from "react";
import { Navigate, RouteObject, useRoutes } from "react-router";
import { BasicLayout } from "./layouts";
import { DisCoverLayout } from "./layouts/DiscoverLayout";
import { Friend, Mine, NewSongs, PlayList, Radio, Recommend, Singer } from "./pages";
const Ranking = lazy(() => import("./pages/Discover/Ranking/Ranking"));
const lazyLoad = (child: ReactNode): ReactNode => {
    return <Suspense fallback={<>loading...</>}>{child}</Suspense>;
};
export const RenderRoute = memo(() => {
    const routes: RouteObject[] = [
        {
            path: "/",

            element: <Navigate to={"/discover"} replace />,
        },
        {
            path: "/discover",

            element: <DisCoverLayout />,
            children: [
                {
                    path: "",
                    element: <Navigate to={"/discover/recommend"} replace />,
                },
                {
                    path: "recommend/*",
                    element: <Recommend />,
                },

                {
                    path: "chart",

                    element: lazyLoad(<Ranking />),
                },
                {
                    path: "chart/:id",
                    element: lazyLoad(<Ranking />),
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
