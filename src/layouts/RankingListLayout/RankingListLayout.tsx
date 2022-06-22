import { memo, PropsWithChildren } from "react";
import { RankingListWrapper } from "./style";
interface RankingListLayoutProps {
    title: string;
}
export const RankingListLayout = memo<PropsWithChildren<RankingListLayoutProps>>(
    ({ title, children }) => {
        return (
            <RankingListWrapper>
                <h2>{title}</h2>
                {children}
            </RankingListWrapper>
        );
    },
);
