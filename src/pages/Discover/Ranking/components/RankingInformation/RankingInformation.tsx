import { CButton } from "@/components/basic/CButton";
import { timestampParseDate } from "@/utils";
import { useAddPlayList } from "@/utils/hooks";
import { handleImageSize } from "@/utils/image";
import { memo } from "react";
import { OperateWrapper, RankingInformationRight, RankingInformationWrapper } from "./style";
interface RankingInformationProps {
    info: any;
}
export const RankingInformation = memo<RankingInformationProps>(({ info }) => {
    const addPlayList = useAddPlayList();
    return (
        <RankingInformationWrapper>
            <img
                src={handleImageSize({ url: info?.coverImgUrl, width: 150, height: 150 }) || ""}
                alt=""
                className="cover-rank"
            />
            <RankingInformationRight>
                <h2 className="title">{info?.name || ""}</h2>
                <div className="update-wrapper">
                    <i></i>
                    <span className="update-date">
                        最近更新：
                        {timestampParseDate(info?.trackNumberUpdateTime, "MM月dd日")}
                    </span>
                </div>
                <OperateWrapper>
                    <CButton
                        className="playing"
                        text="播放"
                        onClick={() => {
                            addPlayList(info?.id);
                        }}
                    />
                    <button className="add-playing" />
                    <CButton
                        className="collect-btn"
                        text={"(" + (info?.subscribedCount || "") + ")"}
                    />
                    <CButton className="share" text={"(" + (info?.shareCount || "") + ")"} />
                    <CButton className="download" text="下载" />
                    <CButton className="comment" text={"(" + (info?.commentCount || "") + ")"} />
                </OperateWrapper>
            </RankingInformationRight>
        </RankingInformationWrapper>
    );
});
