import { memo, PropsWithChildren } from "react";
import { CButtonWrapper } from "./style";
import classnames from "classnames";
interface CButtonProps {
    text: string;
    className?: string;
    onClick?: React.MouseEventHandler<HTMLElement>;
}
export const CButton = memo<PropsWithChildren<CButtonProps>>(
    ({ text, className = "", onClick }) => {
        return (
            <CButtonWrapper onClick={onClick} className={classnames(className)}>
                {text}
            </CButtonWrapper>
        );
    },
);
