import React, { FC } from "react";

interface Props extends React.SVGProps<SVGSVGElement> {}

export const IconTriangleRight: FC<Props> = ({ ...props }) => {
  return (
    <svg
      width="6"
      height="11"
      viewBox="0 0 6 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0 10.2588V0.741208C0 0.0821785 0.766375 -0.247854 1.21457 0.218142L5.79162 4.97693C6.06946 5.26579 6.06946 5.73419 5.79162 6.02306L1.21457 10.7818C0.766375 11.2479 0 10.9178 0 10.2588Z"
        fill="#505050"
      />
    </svg>
  );
};
