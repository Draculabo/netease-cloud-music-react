import { memo, PropsWithChildren, ReactNode } from "react";
import { CButtonWrapper } from "./style";
import classnames from "classnames";
interface CButtonProps {
    text: string;
    className: string;
}
export const CButton = memo<PropsWithChildren<CButtonProps>>(({ text, className }) => {
    return <CButtonWrapper className={classnames(className)}>{text}</CButtonWrapper>;
});
