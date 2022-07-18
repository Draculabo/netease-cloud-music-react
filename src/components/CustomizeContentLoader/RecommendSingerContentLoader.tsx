import React from "react";
import ContentLoader, { IContentLoaderProps } from "react-content-loader";
interface PropsType extends IContentLoaderProps {}
function RecommendSingerContentLoader(props: JSX.IntrinsicAttributes & PropsType) {
    return (
        <ContentLoader
            speed={2}
            width={209}
            height={366}
            viewBox="0 0 209 366"
            backgroundColor="#d9d9d9"
            foregroundColor="#ededed"
            {...props}
        >
            <rect x="68" y={62 * 0 + 12 * 1 + 25} rx="0" ry="0" width="141" height="12" />
            <rect x="0" y={62 * 0 + 12 * 1} rx="0" ry="0" width="62" height="62" />

            <rect x="68" y={62 * 1 + 14 * 2 + 25} rx="0" ry="0" width="141" height="12" />
            <rect x="0" y={62 * 1 + 12 * 2} rx="0" ry="0" width="62" height="62" />

            <rect x="68" y={62 * 2 + 12 * 3 + 25} rx="0" ry="0" width="141" height="12" />
            <rect x="0" y={62 * 2 + 12 * 3} rx="0" ry="0" width="62" height="62" />

            <rect x="68" y={62 * 3 + 12 * 4 + 25} rx="0" ry="0" width="141" height="12" />
            <rect x="0" y={62 * 3 + 12 * 4} rx="0" ry="0" width="62" height="62" />

            <rect x="68" y={62 * 4 + 12 * 5 + 25} rx="0" ry="0" width="141" height="12" />
            <rect x="0" y={62 * 4 + 12 * 5} rx="0" ry="0" width="62" height="62" />
        </ContentLoader>
    );
}

export default RecommendSingerContentLoader;
