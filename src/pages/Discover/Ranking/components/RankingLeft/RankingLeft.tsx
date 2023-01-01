import { getTopList } from "@/services";
import { useRequest } from "ahooks";
import { memo, useState } from "react";
import { SpecialRanking } from "../CMSpecialRanking";
import { GlobalMediaRanking } from "../GlobalMediaRanking";
import { RankingLeftWrapper } from "./style";
export const RankingLeft = memo(() => {
    const [data, setData] = useState<any[]>([]);
    useRequest<any, any>(() => getTopList(), {
        onSuccess(list) {
            if (!list) {
                return;
            }
            const arr1 = list.slice(0, 4);
            const arr2 = list.slice(4, list.length);
            const newArr: any[] = [];
            newArr.push(arr1, arr2);
            setData(newArr);
        },
    });
    return (
        <RankingLeftWrapper>
            <SpecialRanking data={data[0]} />
            <GlobalMediaRanking data={data[1]} />
        </RankingLeftWrapper>
    );
});
