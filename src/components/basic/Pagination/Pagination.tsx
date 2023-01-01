import RcPagination from "rc-pagination";
import { PaginationWrapper } from "@/components/basic/Pagination/Pagination.style";

interface PropsType {
    total: number;
    offset: number;
    pageLimit: number;
    pageChangeHandler: (num: number) => void;
}

function Pagination(props: PropsType) {
    const { offset, total, pageLimit, pageChangeHandler } = props;
    const initialPage = offset / pageLimit;
    return (
        <>
            {total > pageLimit && (
                <PaginationWrapper>
                    <RcPagination
                        defaultPageSize={pageLimit}
                        defaultCurrent={0}
                        current={initialPage + 1}
                        pageSize={pageLimit}
                        onChange={pageChangeHandler}
                        total={total}
                    />
                </PaginationWrapper>
            )}
        </>
    );
}

export default Pagination;
