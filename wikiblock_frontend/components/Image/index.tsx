import NextImage, { ImageProps } from "next/image";
import { FC } from "react";

export const Image: FC<ImageProps> = ({ ...props }) => {
  return <NextImage placeholder="blur" {...props} />;
};
