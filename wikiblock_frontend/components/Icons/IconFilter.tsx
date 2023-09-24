import React, { FC, SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {
  fill?: string;
  stroke?: string;
}

const IconFilter: FC<Props> = ({
  fill = "#EEEEEE",
  stroke = "black",
  ...props
}) => {
  return (
    <svg
      width="25"
      height="22"
      viewBox="0 0 25 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="25" height="22" rx="3" fill={fill} />
      <path
        d="M6.54654 5.76675L6.54657 5.76677L11.6036 10.8245L11.75 10.971V11.1781V16.8125C11.75 16.8634 11.7748 16.9112 11.8166 16.9405L6.54654 5.76675ZM6.54654 5.76675C6.44916 5.66937 6.51861 5.5 6.65701 5.5H19.3431C19.4808 5.5 19.5515 5.66884 19.4536 5.76676L19.4536 5.76677L14.3964 10.8245L14.25 10.971V11.1781V18.3432C14.25 18.4676 14.1082 18.544 14.0041 18.4712L14.0041 18.4712L11.8167 16.9405L6.54654 5.76675Z"
        stroke={stroke}
      />
    </svg>
  );
};

export default IconFilter;
