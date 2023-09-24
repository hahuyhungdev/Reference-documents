import { homeConfig } from "@features/home/home.config";
import { layoutConfig } from "@features/layout/layout.config";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { I18nActiveNamespaces } from "types/i18n";
type Menu = {
  [key: string]: Array<{
    title: string;
    href?: string;
  }>;
};
export const useGetMenuItems_Footer = () => {
  const { t } = useTranslation<I18nActiveNamespaces<"common" | "home">>(
    homeConfig.i18nNamespaces
  );
  const menuItems: Menu = useMemo(
    () => ({
      company: [
        {
          title: t("common:footer.about"),
          href: "/about",
        },
        {
          title: t("common:footer.careers"),
          href: "/careers",
        },
        {
          title: t("common:footer.affiliates"),
          href: "/affiliates",
        },
        {
          title: "Blog",
          href: "/blog",
        },
        {
          title: t("common:footer.press"),
          href: "/press",
        },
        {
          title: t("common:footer.investors"),
          href: "/investors",
        },
        {
          title: t("common:footer.legal_privacy"),
          href: "/legal-privacy",
        },
        {
          title: t("common:footer.cookie_policy"),
          href: "/cookie-policy",
        },
      ],
      developers: [
        {
          title: "Coinbase Cloud",
          href: "/about",
        },
        {
          title: t("common:footer.connect"),
          href: "/careers",
        },
        {
          title: t("common:footer.commerce"),
          href: "/affiliates",
        },
        {
          title: t("common:footer.pro"),
          href: "/blog",
        },
        {
          title: "Bison Trails",
          href: "/bison-trails",
        },
        {
          title: "WalletLink",
          href: "/wallet-link",
        },
        {
          title: "Rosetta",
          href: "/rosetta",
        },
        {
          title: "USDC",
          href: "/USDC",
        },
      ],
      support: [
        {
          title: t("common:footer.help_center"),
          href: "/help-center",
        },
        {
          title: t("common:footer.contact"),
          href: "/contact",
        },
        {
          title: t("common:footer.create_account"),
          href: "/create-account",
        },
        {
          title: t("common:footer.account_infomation"),
          href: "/account-infomation",
        },
        {
          title: t("common:footer.payment_methods"),
          href: "/payment-methods",
        },
        {
          title: t("common:footer.account_access"),
          href: "/account-access",
        },
        {
          title: t("common:footer.supported_crypto"),
          href: "/supported-crypto",
        },
        {
          title: t("common:footer.supported_countries"),
          href: "/supported-countries",
        },
      ],
    }),
    [t]
  );
  return {
    menuItems,
  };
};

export const partners = [
  "image_13.png",
  "image_44.png",
  "image_24.png",
  "image_47.png",
  "image_46.png",
  "image_19.png",
  "image_45.png",
  "image_15.png",
  "image_16.png",
  "image_17.png",
  "image_18.png",
  "image_21.png",
];
