import React, { FC, SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {
  className?: string;
  stroke?: string;
}

export const IconFilterNoBackground: FC<Props> = ({
  className,
  stroke = "#4D4C4C",
  ...props
}) => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M8.35317 11.1242C8.35317 11.48 8.11982 11.9467 7.82232 12.1275L6.99983 12.6583C6.23567 13.1308 5.174 12.6 5.174 11.655V8.53417C5.174 8.12 4.94066 7.58917 4.7015 7.29751L2.46148 4.94083C2.16398 4.64333 1.93066 4.11834 1.93066 3.76251V2.40917C1.93066 1.70334 2.46151 1.17251 3.10901 1.17251H10.8907C11.5382 1.17251 12.069 1.70333 12.069 2.35083V3.64583C12.069 4.11833 11.7715 4.7075 11.4798 4.99917"
        stroke={stroke}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.37449 9.63666C10.4054 9.63666 11.2412 8.80094 11.2412 7.77C11.2412 6.73907 10.4054 5.90333 9.37449 5.90333C8.34355 5.90333 7.50781 6.73907 7.50781 7.77C7.50781 8.80094 8.34355 9.63666 9.37449 9.63666Z"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.5911 9.98666L11.0078 9.40333"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
