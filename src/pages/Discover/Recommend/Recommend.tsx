import { HotRecommend, RecommendCarousel } from "./ChildComponents";

export const Recommend: React.FC = () => {
    return (
        <>
            {/* 轮播图 */}
            <RecommendCarousel />
            <HotRecommend />
        </>
    );
};
