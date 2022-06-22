import { memo, PropsWithChildren } from "react";
import { RankingList } from "../RankingLIst";
interface CMSpecialRankingProps {
    data: any[];
}
export const GlobalMediaRanking = memo<PropsWithChildren<CMSpecialRankingProps>>(({ data }) => {
    return (
        <RankingList
            title="全球媒体榜单"
            data={data}
            imgProperty="coverImgUrl"
            idProperty="id"
            urlProperty="#"
            nameProperty="name"
            updateProperty="updateFrequency"
        />
    );
});
