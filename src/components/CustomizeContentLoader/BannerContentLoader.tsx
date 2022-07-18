import React from "react";
import ContentLoader from "react-content-loader";

function BannerContentLoader() {
    return (
        <ContentLoader
            backgroundColor="#ccc"
            speed={2}
            width={982}
            height={285}
            viewBox="0 0 982 285"
        >
            <rect x="0" y="0" rx="0" ry="0" width="982" height="285" />
        </ContentLoader>
    );
}

export default BannerContentLoader;
