import { Button } from "@components/Button";
import { IconDropdown } from "@components/Icons";
import { SelectOptions } from "@components/select";
import { overviewConfig } from "@features/example/example.config";
import { layoutConfig } from "@features/layout/layout.config";
import { Dropdown, Menu, Select, Space, Typography } from "antd";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { FC, useEffect, useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { I18nActiveNamespaces } from "types/i18n";

import s from "./header.module.css";

export const Header: FC = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState("en");
  const { t } = useTranslation<I18nActiveNamespaces<"common">>(
    layoutConfig.i18nNamespaces
  );
  const handleLangChange = (evt: any) => {
    const lang = evt.target.value;
    setLanguage(lang);
    i18n.changeLanguage(lang);
  };
  const options = [
    {
      value: "en",
      label: "English",
      url_Image: "/images/usa.png",
    },
    {
      value: "vi",
      label: "Vietnamese",
      url_Image: "/images/vn.png",
    },
  ];
  const router: any = useRouter();
  const { pathname, asPath, query } = router;
  return (
    <div className="header w-full left-0 ">
      {/* Menu items */}
      <div
        className={clsx(
          "head-title flex items-center gap-x-[20px] pr-[20px] justify-center h-[58px] bg-header-bg shadow-[0_1px_4px_0_rgba(0,21,41,0.12)] w-full font-light text-white",
          s["header-info-coin-wrapper"]
        )}
      >
        <Image width={42} height={42} src="/images/logo.svg" alt="Logo" />
        <div
          className={clsx(
            "flex space-x-2 items-center h-[60px] text-[#fff] flex-wrap justify-center",
            s["header-info-coin"]
          )}
        >
          <h6 className="text-[#fff] sm:mb-0 not-italic font-normal text-base whitespace-nowrap">
            {t("common:header.welcome_message")}
          </h6>
          <div className={clsx(s["welcome_end"])}>
            <h6 className="not-italic font-normal text-base leading-8 text-[#F4AC20] whitespace-nowrap">
              {t("common:header.welcome_message_2")}
            </h6>
            <h6 className="text-[#fff] not-italic  font-normal text-base whitespace-nowrap">
              {t("common:header.welcome_message_3")}{" "}
            </h6>
          </div>

        </div>
        <Button className="bg-[#F4AC20] text-[#FFFFFF] h-[29px] w-[110px] sm:h-[60%] px-2 py-[2px]">
          <span className="whitespace-nowrap">{t("common:header.get_started")}</span>
        </Button>
      </div>
      <div
        className={clsx(
          "head-price h-[60px] flex space-x-4 py-[10px] items-center gap-[40px] px-[20px] justify-center  w-full text-gray-700 leading-4 font-normal",
          s["header-info-and-language"]
        )}
      >
        <div
          className={clsx(
            "market flex gap-[15px] overflow-x-auto overflow-y-hidden lg:px-[10px]",
            s["custom-scroll-bar"]
          )}
        >
          <div className="flex items-center gap-x-[5px] w-fit">
            <span className="whitespace-nowrap"> Market Cap $1,2T </span>
            <span className="text-[#0EC182] "> +4,05%</span>
          </div>
          <div className="flex items-center gap-x-[5px] w-fit">
            <span className="whitespace-nowrap"> 24h Spot volume $30,0B</span>
          </div>
          <div className="flex items-center gap-x-[5px] w-fit">
            <span className="whitespace-nowrap"> 24h Long/short $20B</span>
          </div>
          <div className="flex items-center gap-x-[5px] w-fit">
            <span className="whitespace-nowrap"> BTC dominance 43,41%</span>
          </div>
          <div className="flex gap-[5px] items-center">
            <span className="whitespace-nowrap"> BTC price $29.200</span>
            <span className="text-[#EB4D4B]">-2%</span>
          </div>
          <div className="flex items-center gap-x-[5px] w-fit">
            <span className="whitespace-nowrap"> ETH price $1.800</span>
          </div>
        </div>
        <div className="lg:hidden relative custom_center_selectOptions">
          <SelectOptions
            options={options}
            isIcon={true}
            defaultValue={router.locale || "vi"}
            size="large"
            bordered={false}
            suffixIcon={<MdArrowDropDown size={20} color="black" />}
            onChange={(v: any) => {
              router.push({ pathname, query }, asPath, { locale: v });
            }
            }
            placeholder={
              options.find((item) => item.value === router.locale)?.label
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
