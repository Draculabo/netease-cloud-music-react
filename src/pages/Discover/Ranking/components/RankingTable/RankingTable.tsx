import { store } from "@/stores";
import { playerAction, useplayMusic } from "@/stores/player/slice";
import { timestampParseDate, useDispatch } from "@/utils";
import { handleImageSize } from "@/utils/image";
import { memo, useCallback } from "react";
import {
    Operate,
    RankingCTable,
    RankingRow,
    RankingTableWrapper,
    RankingTitleWrapper,
} from "./style";
interface RankingTableProps {
    trackCount: number;
    playCount: number;
    list: any[];
}
export const RankingTable = memo<RankingTableProps>(({ trackCount, playCount, list }) => {
    const dispatch = useDispatch();
    const playMusic = useplayMusic();

    const playMusicEvent = useCallback(id => {
        playMusic(id);
    }, []);
    return (
        <RankingTableWrapper>
            <RankingTitleWrapper>
                <div className="title-left">
                    <h2>歌曲列表</h2>
                    <span className="song-count">{trackCount}首歌</span>
                </div>
                <div className="title right">
                    播放：<span className="play-count">{playCount}</span>次
                </div>
            </RankingTitleWrapper>
            <RankingCTable>
                <thead>
                    <tr>
                        <th className="index-head"></th>
                        <th>标题</th>
                        <th>时长</th>
                        <th>歌手</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((l, i) => {
                        return (
                            <RankingRow key={l.id} className={i % 2 === 0 ? "even" : ""}>
                                <td>
                                    <div className="td-index">
                                        <span className="index">{i + 1}</span>
                                        <span className="new"></span>
                                    </div>
                                </td>
                                <td>
                                    <div className="td-container td-center">
                                        <a href="#" className="img-link">
                                            <img
                                                src={handleImageSize({
                                                    url: l.al.picUrl,
                                                    width: 40,
                                                    height: 40,
                                                })}
                                                alt=""
                                            />
                                        </a>
                                        <span
                                            onClick={() => {
                                                playMusicEvent(l.id);
                                            }}
                                            className="playing btn"
                                        ></span>
                                        <span className="song-name btn">{l.al.name}</span>
                                        <span className="alias">{l.alia[0]}</span>
                                    </div>
                                </td>
                                <td>
                                    <div className="td-container">
                                        <span className="song-duration">
                                            {timestampParseDate(l.dt, "mm:ss")}
                                        </span>
                                        <Operate className="operate">
                                            <span className="add-playing btn"></span>
                                            <span className="collect btn"></span>
                                            <span className="share btn"></span>
                                            <span className="download btn"></span>
                                        </Operate>
                                    </div>
                                </td>
                                <td> {l.ar[0]?.name}</td>
                            </RankingRow>
                        );
                    })}
                </tbody>
            </RankingCTable>
        </RankingTableWrapper>
    );
});
