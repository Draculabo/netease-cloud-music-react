import { memo, useCallback, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "@/utils/hooks";
import { getBanners } from "@/stores";
import { Carousel } from "antd";
import {
    BannerRight,
    CarouselWrapper,
    CArrow,
    CBannerContainer,
    CBannerWrapper,
    CImg,
} from "./styles";
import { CarouselRef } from "antd/lib/carousel";
export const RecommendCarousel: React.MemoExoticComponent<() => JSX.Element> = memo(() => {
    const banners = useSelector(state => state.recommend.banners);
    const [index, setIndex] = useState(0);
    const carouselRef = useRef<CarouselRef>(null);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getBanners());
    }, []);

    const beforeChangeCarousel = useCallback(
        (from, to) => {
            setIndex(to);
        },
        [index],
    );
    const changePrev = useCallback(() => {
        carouselRef?.current?.prev();
    }, [carouselRef]);
    const changeNext = useCallback(() => {
        carouselRef?.current?.next();
    }, [carouselRef]);
    const bgImageUrl = banners[index] && banners[index].imageUrl + "?imageView&blur=40x20";

    return (
        <CBannerContainer bgImage={bgImageUrl}>
            <CBannerWrapper className="wrap-v2">
                <CarouselWrapper>
                    <Carousel
                        ref={carouselRef}
                        autoplay
                        beforeChange={beforeChangeCarousel}
                        effect="fade"
                    >
                        {banners.map((b: any, i) => {
                            return (
                                <div key={i}>
                                    <a href={b.url}>
                                        <CImg src={b.imageUrl}></CImg>
                                    </a>
                                </div>
                            );
                        })}
                    </Carousel>
                </CarouselWrapper>

                <BannerRight>
                    <a href=""></a>
                    <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
                </BannerRight>
                <CArrow onClick={changePrev} pos={"left"} />
                <CArrow onClick={changeNext} pos={"right"} />
            </CBannerWrapper>
        </CBannerContainer>
    );
});
