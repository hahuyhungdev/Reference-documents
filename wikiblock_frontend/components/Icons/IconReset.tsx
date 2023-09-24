import React, { FC, SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {}

const IconReset: FC<Props> = ({ ...props }) => {
  return (
    <svg
      width="19"
      height="18"
      viewBox="0 0 19 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6.99935 3.8098C7.65623 3.6148 8.38106 3.4873 9.18139 3.4873C12.798 3.4873 15.7275 6.3973 15.7275 9.9898C15.7275 13.5823 12.798 16.4923 9.18139 16.4923C5.56478 16.4923 2.63525 13.5823 2.63525 9.9898C2.63525 8.6548 3.04297 7.4098 3.7376 6.3748"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.06348 3.99L8.24552 1.5"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.06348 3.99023L8.60794 5.83523"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IconReset;
