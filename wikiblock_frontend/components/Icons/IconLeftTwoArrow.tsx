import { FC, SVGProps } from "react";

interface IconProps extends SVGProps<SVGSVGElement> {
  fill?: string;
}

export const IconLeftTwoArrow: FC<IconProps> = ({
  fill = "#4992d6",
  ...props
}) => {
  return (
    <svg
      width="9"
      height="8"
      viewBox="0 0 9 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4.12728 3.68902L7.64737 0.128743C7.81708 -0.0429142 8.09238 -0.0429142 8.26209 0.128743L8.6727 0.544054C8.84222 0.715527 8.8424 0.993256 8.67342 1.1651L5.88361 3.99991L8.67324 6.8349C8.84241 7.00674 8.84204 7.28447 8.67251 7.45595L8.26191 7.87126C8.0922 8.04291 7.8169 8.04291 7.64719 7.87126L4.12728 4.3108C3.95757 4.13914 3.95757 3.86068 4.12728 3.68902Z"
        fill={fill}
      />
      <path
        d="M0.127283 3.68902L3.64737 0.128743C3.81708 -0.0429142 4.09238 -0.0429142 4.26209 0.128743L4.6727 0.544054C4.84222 0.715527 4.8424 0.993256 4.67342 1.1651L1.88361 3.99991L4.67324 6.8349C4.84241 7.00674 4.84204 7.28447 4.67251 7.45595L4.26191 7.87126C4.0922 8.04291 3.8169 8.04291 3.64719 7.87126L0.127283 4.3108C-0.0424276 4.13914 -0.0424276 3.86068 0.127283 3.68902Z"
        fill={fill}
      />
    </svg>
  );
};
