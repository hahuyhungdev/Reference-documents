import { FC, SVGProps } from "react";

export const IconAdd: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6 0C9.312 0 12 2.688 12 6C12 9.312 9.312 12 6 12C2.688 12 0 9.312 0 6C0 2.688 2.688 0 6 0ZM6 10.6667C8.578 10.6667 10.6667 8.578 10.6667 6C10.6667 3.42133 8.578 1.33333 6 1.33333C3.42133 1.33333 1.33333 3.42133 1.33333 6C1.33333 8.578 3.42133 10.6667 6 10.6667ZM11.6567 10.714L13.5427 12.5993L12.5993 13.5427L10.714 11.6567L11.6567 10.714Z"
        fill={props.color || "#757575"}
      />
    </svg>
  );
};
