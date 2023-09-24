import clsx from "clsx";
import NextLink from "next/link";
import React, { FC } from "react";

import s from "./LinkButton.module.css";

export interface LinkButtonProps extends React.ComponentPropsWithoutRef<"a"> {
  href: string;
}

export const LinkButton: FC<LinkButtonProps> = ({
  className,
  href,
  children,
  ...restProps
}) => {
  return (
    <NextLink href={href} passHref>
      <a className={clsx(s.root, className)} {...restProps}>
        {children}
      </a>
    </NextLink>
  );
};
