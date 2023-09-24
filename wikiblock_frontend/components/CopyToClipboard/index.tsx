import { overviewConfig } from "@features/example/example.config";
import { Tooltip } from 'antd';
import clsx from 'clsx';
import Image from "next/image";
import { FC } from 'react';
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { HiChevronDoubleRight } from "react-icons/hi";
import { I18nActiveNamespaces } from "types/i18n";
export type CopyProps = {
  className?: string;
  title: string;
};

export const CopyToClipboard: FC<CopyProps> = ({ className, children, title, ...props }) => {
  const { t } = useTranslation<I18nActiveNamespaces<"common" | "home">>(
    overviewConfig.i18nNamespaces
  );
  const [text, setText] = useState("copy");
  const [isCopied, setIsCopied] = useState(false);
  // copyToClipboard
  function copyToClipboard(text: string) {
    navigator.clipboard.writeText(text);
    setIsCopied(true);
  }
  return (
    <div
      className={clsx(className, '')}
      onClick={() => copyToClipboard(title)}
      {...props}
    >
      <div
        className="lg:col-span-1 rounded-lg mb-[5px] h-[34px] bg-[#EBF0F9] 
                flex items-center justify-between gap-2 sm:text-center sm:w-full"
      >
        <Tooltip title={title}>
          <span className="ml-[12px] cursor-pointer truncate">
            {title}
          </span>
        </Tooltip>
        <span className="ml-auto mr-[10px]">
          <Tooltip placement="rightTop" title={isCopied ? "Copied" : "Copy"}>
            <Image
              className="cursor-pointer"
              src="/images/TwoSquare.png"
              width={11}
              height={11}
              alt="copy"
            />
          </Tooltip>
        </span>
      </div>
    </div>
  );
};

