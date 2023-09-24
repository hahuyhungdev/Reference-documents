import React, { FC } from "react";

interface Props {
  isToggled?: boolean;
}

const IconMenu: FC<Props> = ({ isToggled = false }) => {
  if (!isToggled) {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 7H21"
          stroke="#292D32"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M3 12H21"
          stroke="#292D32"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M3 17H21"
          stroke="#292D32"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  } else
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.16992 14.83L14.8299 9.17004"
          stroke="#292D32"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.8299 14.83L9.16992 9.17004"
          stroke="#292D32"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
          stroke="#292D32"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
};

export default IconMenu;
