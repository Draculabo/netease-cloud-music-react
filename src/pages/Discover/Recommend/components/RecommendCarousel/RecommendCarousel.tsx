import { CArrow } from "@/components";
import { BannerContentLoader } from "@/components/basic/CustomizeContentLoader";
import { getBanners } from "@/services";
import { useRequest } from "ahooks";
import { Carousel } from "antd";
import { CarouselRef } from "antd/lib/carousel";
import { memo, useCallback, useRef, useState } from "react";
import { BannerRight, CarouselWrapper, CBannerContainer, CBannerWrapper, CImg } from "./style";
export const RecommendCarousel = memo(() => {
    const { data: banners, loading } = useRequest<any[] | void, any>(() => getBanners());
    const [index, setIndex] = useState(0);

    const carouselRef = useRef<CarouselRef>(null);

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

    const bgImageUrl =
        banners && banners[index] ? banners[index].imageUrl + "?imageView&blur=40x20" : "";

    return (
        <CBannerContainer bgImage={bgImageUrl}>
            <CBannerWrapper className="wrap-v2">
                <CarouselWrapper>
                    {loading ? (
                        <BannerContentLoader />
                    ) : (
                        <Carousel
                            ref={carouselRef}
                            autoplay
                            beforeChange={beforeChangeCarousel}
                            effect="fade"
                        >
                            {banners?.map((b: any, i) => {
                                return (
                                    <div key={i}>
                                        <a href={b.url}>
                                            <CImg src={b.imageUrl} />
                                        </a>
                                    </div>
                                );
                            })}
                        </Carousel>
                    )}
                </CarouselWrapper>
                <BannerRight>
                    <a href="" />
                    <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
                </BannerRight>
                <CArrow onClick={changePrev} className="carousel-arrow left-arrow" />
                <CArrow onClick={changeNext} className="carousel-arrow  right-arrow" />
            </CBannerWrapper>
        </CBannerContainer>
    );
});
