import { CMFooter, CMHeader } from "@/components";
import { memo } from "react";
import { CMMain } from "./styles";

export const BasicLayout = memo(props => {
    return (
        <>
            <CMHeader />
            <CMMain>{props.children}</CMMain>
            <CMFooter />
        </>
    );
});
