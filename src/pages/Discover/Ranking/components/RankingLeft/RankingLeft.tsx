import { getTopList } from "@/services";
import { useRequest } from "ahooks";
import { Skeleton } from "antd";
import { memo, useEffect, useState } from "react";
import { SpecialRanking } from "../CMSpecialRanking";
import { GlobalMediaRanking } from "../GlobalMediaRanking";
import { RankingLeftWrapper } from "./style";
export const RankingLeft = memo(() => {
    const [data, setData] = useState<any[]>([]);
    const { run, loading } = useRequest<any, any>(() => getTopList(), {
        onSuccess(res) {
            if (!res) {
                return;
            }
            const arr1 = res.list?.slice(0, 4);
            const arr2 = res.list?.slice(4, res.list?.length);
            const newArr: any[] = [];
            newArr.push(arr1, arr2);
            setData(newArr);
        },
    });
    useEffect(() => {
        run();
    }, []);
    return (
        <RankingLeftWrapper>
            {loading ? (
                <Skeleton loading />
            ) : (
                <>
                    <SpecialRanking data={data[0]} />
                    <GlobalMediaRanking data={data[1]} />
                </>
            )}
        </RankingLeftWrapper>
    );
});
