import { Typography } from "@components/Typography";
import { layoutConfig } from "@features/layout/layout.config";
import { tokenConfig } from "@features/token/token.config";
import clsx from "clsx";
import { capitalize } from "lodash";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { I18nActiveNamespaces } from "types/i18n";

import styles from "./index.module.css";
import { partners, useGetMenuItems_Footer } from "./menu";
export type Props = {
  className?: string;
  children?: string;
};

export type LiProps = {
  size?: string;
  className?: string;
  children?: string;
};
const FooterLi: FC<LiProps> = ({ children }) => {
  const { t } = useTranslation<
    I18nActiveNamespaces<"common" | "home" | "token">
  >(tokenConfig.i18nNamespaces);
  return (
    <li className={clsx("px-4")}>
      <Typography size={"small"}>
        <Link href="#">
          <a className="text-[#587088]">{children}</a>
        </Link>
      </Typography>
    </li>
  );
};

export const FooterList = () => {
  const { t } = useTranslation(layoutConfig.i18nNamespaces);
  const { menuItems } = useGetMenuItems_Footer();
  return (
    <div
      className="grid grid-cols-5 gap-x-5 md:grid-cols-4"
    >
      <div className="sm:col-span-2">
        <ul className={clsx(styles.footerLi, "text-sm", "dark:text-white")}>
          <li className={clsx("px-4")}>
            <div className={clsx("flex items-center gap-x-2 sm:gap-x-0 sm:justify-around")}>
              <div className="w-[10%] sm:scale-[2.5]"><img src="/images/logo.png" alt="Logo" />
              </div>
              <div className="text-[#074C83] not-italic font-bold text-[16px] leading-8">
                Wikiblock
              </div>
            </div>
          </li>
          <li className={clsx("px-4")}>
            <Typography size={"extra_small"}>
              <span className="text-[#587088]">{t("footer.the_landmark")}</span>
            </Typography>
          </li>
          <li className={clsx("px-4")}>
            <Typography size={"small"}>
              <Link href="#">
                <a className="text-[#587088]">+84 28 7100 8888</a>
              </Link>
            </Typography>
          </li>

          <li className={clsx("px-4")}>
            <Typography size={"small"}>
              <Link href="#">
                <a className="text-[#587088]">Mail</a>
              </Link>
            </Typography>
          </li>
        </ul>
      </div>
      {Object.keys(menuItems).map((key) => (
        <div key={key} className="sm:col-span-2 mt-1">
          <ul className={clsx(styles.footerLi, "text-sm", "dark:text-white")}>
            <li className={clsx("px-4")}>
              <Typography size={"medium"} className="font-nomal">
                <span className="text-[#113353]">{capitalize(key)}</span>
              </Typography>
            </li>
            {(menuItems as any)[key]?.map((item: any) => (
              <FooterLi key={item.title}>{item.title}</FooterLi>
            ))}
          </ul>
        </div>
      ))}
      <div className="md:col-span-4 mt-[5px] sm:mt-2">
        <Typography size={"medium"} className="font-nomal text-left sm:text-center">
          <span className="text-[#113353]">{t("footer.our_partners")}</span>
        </Typography>
        <div
          className="lg:w-full xl:w-2/3 md:gap-3 gap-6 pt-[30px] flex flex-wrap
          md:grid-cols-6 md:gap-x-2 md:pt-3 md:px-8
        "
        >
          {partners.map((item) => (
            <div
              key={item}
              className="hover:scale-110 cursor-pointer transition-all w-[15%] sm:w-[14%]"
            >
              <Image
                width={32}
                height={32}
                alt={item}
                src={`/images/${item}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
