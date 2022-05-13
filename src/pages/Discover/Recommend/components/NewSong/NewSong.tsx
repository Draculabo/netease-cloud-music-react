import { DiscoverModuleLayout } from "@/layouts";
import { getTopAlbum } from "@/services/discover/recommend";
import { splitArray } from "@/utils";
import { useRequest } from "ahooks";
import { memo, useEffect, useMemo, useRef, useState } from "react";
import { RArrow, LArrow, NewSongWrapper, RollItem } from "./style";
import Slider from "react-slick";
// import { data } from "@/mock/NewSong";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export const NewSong: React.MemoExoticComponent<() => JSX.Element> = memo(() => {
    const [playList, setPlayList] = useState<any[]>([]);
    const newSongCarouselRef = useRef<Slider>(null);
    const setting = useMemo(() => {
        return {
            dots: false,
            infinite: false,
            arrows: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
        };
    }, []);
    const { data } = useRequest<any, any>(
        () => {
            return getTopAlbum(10);
        },
        {
            onSuccess: result => {
                if (result != null) {
                    setPlayList(splitArray(result.weekData.slice(0, 10)));
                }
            },
        },
    );

    const prev = () => {
        newSongCarouselRef?.current?.slickPrev();
    };
    const next = () => {
        newSongCarouselRef?.current?.slickNext();
    };
    // );
    return (
        <DiscoverModuleLayout title="新歌上架">
            <NewSongWrapper>
                <Slider ref={newSongCarouselRef} className="roll-list" {...setting}>
                    {playList.length > 0 &&
                        playList.map((s1, i1) => {
                            return (
                                <div key={i1}>
                                    <div className="slide-list">
                                        {s1.map(s2 => {
                                            return (
                                                <RollItem key={s2.id}>
                                                    <div className="album-top">
                                                        <img src={s2.blurPicUrl} />
                                                        <a href="" className="mask"></a>
                                                        <a href="" className="icon-play"></a>
                                                    </div>
                                                    <p className="album-name">{s2.name}</p>
                                                    <p className="album-artist">{s2.artist.name}</p>
                                                </RollItem>
                                            );
                                        })}
                                    </div>
                                </div>
                            );
                        })}
                </Slider>

                <LArrow onClick={prev} />
                <RArrow onClick={next} />
            </NewSongWrapper>
        </DiscoverModuleLayout>
    );
});
