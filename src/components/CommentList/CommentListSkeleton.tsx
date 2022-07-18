import React from "react";
import ContentLoader from "react-content-loader";

const CommentListSkeleton = props => {
    return (
        <ContentLoader
            speed={2}
            width={730}
            height={285}
            viewBox="0 0 730 285"
            backgroundColor="#dbdbdb"
            foregroundColor="#c2c2c2"
            {...props}
        >
            <rect x="4" y="4" width="80" height="80" />
            <rect x="4" y="104" width="80" height="80" />
            <rect x="4" y="204" width="80" height="80" />
            <rect x="105" y="10" rx="3" ry="3" width="480" height="10" />
            <rect x="105" y="40" rx="3" ry="3" width="520" height="10" />
            <rect x="105" y="70" rx="3" ry="3" width="520" height="10" />
            <rect x="105" y="110" rx="3" ry="3" width="480" height="10" />
            <rect x="105" y="140" rx="3" ry="3" width="520" height="10" />
            <rect x="105" y="170" rx="3" ry="3" width="520" height="10" />
            <rect x="105" y="210" rx="3" ry="3" width="480" height="10" />
            <rect x="105" y="240" rx="3" ry="3" width="520" height="10" />
            <rect x="105" y="270" rx="3" ry="3" width="520" height="10" />
        </ContentLoader>
    );
};

export default CommentListSkeleton;
