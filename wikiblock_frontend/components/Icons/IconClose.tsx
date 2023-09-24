import React, { FC, SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> { }

export const IconClose: FC<Props> = ({ ...props }) => {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.5 22.9168C18.2292 22.9168 22.9167 18.2293 22.9167 12.5002C22.9167 6.771 18.2292 2.0835 12.5 2.0835C6.77083 2.0835 2.08333 6.771 2.08333 12.5002C2.08333 18.2293 6.77083 22.9168 12.5 22.9168Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.55208 15.4481L15.4479 9.55225"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.4479 15.4481L9.55208 9.55225"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
