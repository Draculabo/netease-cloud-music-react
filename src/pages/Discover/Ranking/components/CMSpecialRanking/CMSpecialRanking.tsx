import { memo, PropsWithChildren } from "react";
import { RankingList } from "../RankingLIst";
interface CMSpecialRankingProps {
    data: any[];
}
const CMSpecialRanking = memo<PropsWithChildren<CMSpecialRankingProps>>(({ data }) => {
    return (
        <RankingList
            title="云音乐特色榜"
            data={data}
            imgProperty="coverImgUrl"
            idProperty="id"
            urlProperty="#"
            nameProperty="name"
            updateProperty="updateFrequency"
        />
    );
});
export default CMSpecialRanking;
