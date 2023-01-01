import React, { memo } from "react";
import { Skeleton as AntdSkeleton } from "antd";
import { SkeletonProps } from "antd/lib/skeleton/Skeleton";
import { SkeletonWrapper } from "@/components/basic/Skeleton/Skeleton.style";
interface PropsType extends SkeletonProps {}
const Skeleton = memo<PropsType>(props => {
    return (
        <SkeletonWrapper>
            <AntdSkeleton {...props} />
        </SkeletonWrapper>
    );
});

export default Skeleton;
