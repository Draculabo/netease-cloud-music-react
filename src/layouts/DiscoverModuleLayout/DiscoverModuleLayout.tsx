import { memo, ReactNode } from "react";
import { HeaderLeft, ModuleHeader, ModuleWrapper } from "./styles";
interface Props {
    children?: ReactNode;
    title: string;
    tabList?: string[];
}
export const DiscoverModuleLayout = memo<Props>(props => {
    const { title, tabList } = props;

    return (
        <ModuleWrapper>
            <ModuleHeader>
                <HeaderLeft>
                    <a href="" className="hc-header">
                        {title}
                    </a>
                    {tabList && (
                        <div className="hc-tab">
                            {tabList.map((c, i) => {
                                return (
                                    <a href="" key={i}>
                                        {c}
                                    </a>
                                );
                            })}
                        </div>
                    )}
                </HeaderLeft>
                <a className="hc-more" href="">
                    更多
                </a>
            </ModuleHeader>
            {props.children}
        </ModuleWrapper>
    );
});
