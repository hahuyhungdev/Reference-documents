import { Token } from "@components/NewsList/Token";
import { Typography } from "@components/Typography";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { I18nActiveNamespaces } from "types/i18n";

import { tokenConfig } from "./token.config";

const myList = [
  {
    image: "/images/paypal.png",
    title: "Tại sao 2022 Uniswap chưa bùng nổ",
    url: "/taisao2022uniswapchuanbungno",
    view: 1012,
    time: "01/01/2020",
    author: "Nguyen Van A",
  },
  {
    image: "/images/paypal.png",
    title: "Tại sao 2022 Uniswap chưa bùng nổ",
    url: "/taisao2022uniswapchuanbungno",
    view: 1012,
    time: "01/01/2020",
    author: "Nguyen Van A",
  },
  {
    image: "/images/paypal.png",
    title: "Tại sao 2022 Uniswap chưa bùng nổ",
    url: "/taisao2022uniswapchuanbungno",
    view: 1012,
    time: "01/01/2020",
    author: "Nguyen Van A",
  },
  {
    image: "/images/paypal.png",
    title: "Tại sao 2022 Uniswap chưa bùng nổ",
    url: "/taisao2022uniswapchuanbungno",
    view: 1012,
    time: "01/01/2020",
    author: "Nguyen Van A",
  },
  {
    image: "/images/paypal.png",
    title: "Tại sao 2022 Uniswap chưa bùng nổ",
    url: "/taisao2022uniswapchuanbungno",
    view: 1012,
    time: "01/01/2020",
    author: "Nguyen Van A",
  },
  {
    image: "/images/paypal.png",
    title: "Tại sao 2022 Uniswap chưa bùng nổ",
    url: "/taisao2022uniswapchuanbungno",
    view: 1012,
    time: "01/01/2020",
    author: "Nguyen Van A",
  },
  {
    image: "/images/paypal.png",
    title: "Tại sao 2022 Uniswap chưa bùng nổ",
    url: "/taisao2022uniswapchuanbungno",
    view: 1012,
    time: "01/01/2020",
    author: "Nguyen Van A",
  },
  {
    image: "/images/paypal.png",
    title: "Tại sao 2022 Uniswap chưa bùng nổ",
    url: "/taisao2022uniswapchuanbungno",
    view: 1012,
    time: "01/01/2020",
    author: "Nguyen Van A",
  },
  {
    image: "/images/paypal.png",
    title: "Tại sao 2022 Uniswap chưa bùng nổ",
    url: "/taisao2022uniswapchuanbungno",
    view: 1012,
    time: "01/01/2020",
    author: "Nguyen Van A",
  },
  {
    image: "/images/paypal.png",
    title: "Tại sao 2022 Uniswap chưa bùng nổ",
    url: "/taisao2022uniswapchuanbungno",
    view: 1012,
    time: "01/01/2020",
    author: "Nguyen Van A",
  },
  {
    image: "/images/paypal.png",
    title: "Tại sao 2022 Uniswap chưa bùng nổ",
    url: "/taisao2022uniswapchuanbungno",
    view: 1012,
    time: "01/01/2020",
    author: "Nguyen Van A",
  },
  {
    image: "/images/paypal.png",
    title: "Tại sao 2022 Uniswap chưa bùng nổ",
    url: "/taisao2022uniswapchuanbungno",
    view: 1012,
    time: "01/01/2020",
    author: "Nguyen Van A",
  },
];
export const Analytis = () => {
  const { t } = useTranslation<
    I18nActiveNamespaces<"common" | "home" | "token">
  >(tokenConfig.i18nNamespaces);
  const { ref: anylytis, inView: anylytisElementIsVisible } = useInView();
  return (
    <div className="mt-[26px]">
      <Typography
        className="font-semibold text-[20px] sm:text-[16px]"
        color="primary"
      >
        {t("token:menu_item.analytics")}
      </Typography>
      <div className="analytis mt-[26px]">
        <Token newItems={myList} />
      </div>
    </div>
  );
};
