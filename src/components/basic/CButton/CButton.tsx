import { ButtonHTMLAttributes } from "react";
import { CButtonWrapper } from "./style";
interface CButtonProps extends ButtonHTMLAttributes<any> {
    text: string;
}
export const CButton = ({ text, ...rest }: CButtonProps) => {
    return <CButtonWrapper {...rest}>{text}</CButtonWrapper>;
};
