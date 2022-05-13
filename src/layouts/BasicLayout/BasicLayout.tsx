import { CMFooter, CMHeader, PlayTool } from "@/components";
import { memo } from "react";
import { CMMain } from "./style";

export const BasicLayout = memo(props => {
    return (
        <>
            <CMHeader />
            <CMMain>{props.children}</CMMain>
            <PlayTool />
            <CMFooter />
        </>
    );
});
