import { memo, PropsWithChildren } from "react";
import { useNavigate } from "react-router";
import { RankingListLayout } from "@/layouts";
import { RankingListItem } from "./style";
import RankingLeftSkeleton from "./RankingLeftSkeleton";
interface RankingListProps {
    title: string;
    data: any[];
    idProperty: string;
    imgProperty: string;
    urlProperty: string;
    nameProperty: string;
    updateProperty: string;
}
export const RankingList = memo<PropsWithChildren<RankingListProps>>(
    ({ title, data, ...props }) => {
        const navigate = useNavigate();
        const getRankingDetail = (id: number) => {
            navigate(`/discover/chart/${id}`);
        };
        if (!data) {
            return <RankingLeftSkeleton />;
        }
        return (
            <RankingListLayout title={title}>
                {data?.map(r => {
                    return (
                        <RankingListItem
                            key={r[props.idProperty]}
                            onClick={() => getRankingDetail(r.id)}
                        >
                            <img src={r[props.imgProperty]} alt="" className="avatar" />
                            <div className="info">
                                <h4 className="name">{r[props.nameProperty]}</h4>
                                <p className="update-time">{r[props.updateProperty]}</p>
                            </div>
                        </RankingListItem>
                    );
                })}
            </RankingListLayout>
        );
    },
);
