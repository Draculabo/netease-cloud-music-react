import { NoDataContainer, NoDataWrapper } from "./NoData.style";

type NoDataPropsType = {
    text?: string;
};

function NoData(props: NoDataPropsType) {
    return (
        <NoDataContainer>
            <NoDataWrapper>
                <span className="no-data-icon"></span>
                <span className="no-data-text">{props.text || "暂无数据"}</span>
            </NoDataWrapper>
        </NoDataContainer>
    );
}

export default NoData;
