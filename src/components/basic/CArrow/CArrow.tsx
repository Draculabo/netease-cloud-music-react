import { memo, MouseEventHandler } from "react";
import { CArrow as CSArrow } from "./style";
interface CArrowProps {
    width?: number;
    height?: number;
    onClick?: MouseEventHandler<HTMLAnchorElement>;
    className?: string;
}
export const CArrow = memo<CArrowProps>(props => {
    const {
        width = 37,
        height = 63,
        onClick: clickEvent = e => {
            e.preventDefault;
        },
        className,
    } = props;
    return <CSArrow className={className} onClick={clickEvent} width={width} height={height} />;
});
