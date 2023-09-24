import { Skeleton } from 'antd';
import React from 'react';
import styled from 'styled-components';

const SkeletonNews = () => {
  return (
    <div className="flex gap-x-3 mb-2">
      <Skeleton.Image active={true} />
      <div className="flex-1 flex flex-col justify-between">
        <SkeletonInput active={true} />
        <CustomSkeleton active={true} />
      </div>
    </div>
  );
};

export default SkeletonNews;

const SkeletonInput = styled(Skeleton.Input)`
  width: 100%;
  display: block;
  &.ant-skeleton-element .ant-skeleton-input {
    width: 90%;
  }
`;

const CustomSkeleton = styled(Skeleton)`
  margin-bottom: 20px;
  .ant-skeleton-paragraph {
    display: none;
  }
`;
