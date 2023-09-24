import { Menu } from "@features/layout/components/NavBar";
import { layoutConfig } from "@features/layout/layout.config";
import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";

export const useGetMenuItems = () => {
  const { t } = useTranslation(layoutConfig.i18nNamespaces);

  const menuItems: Array<Menu> = useMemo(
    () => [
      {
        title: t("crypto_assets.sidebar.all_crypto_assets"),
        url: "/crypto-assets",
      },
      {
        title: t("navbar.categories"),
        url: "/categories?type=all",
        submenu: [
          {
            title: t("crypto_assets.sidebar.all_categories"),
            url: "/categories?type=all",
          },
          {
            title: "DeFi",
            url: "/categories?type=deFi",
          },
          {
            title: "NFTs",
            url: "/categories?type=nfts",
          },
          {
            title: "Stablecoins",
            url: "/categories?type=stablecoins",
          },

          {
            title: "Dex",
            url: "/categories?type=dex",
          },
          {
            title: "CEX",
            url: "/categories?type=cex",
          },
          {
            title: "AMM",
            url: "/categories?type=amm",
          },
          {
            title: "Smart Contracts",
            url: "/categories?type=smart-contracts",
          },
          {
            title: "Oracle",
            url: "/categories?type=oracle",
          },
          {
            title: "Yeild Farming",
            url: "/categories?type=yeild-farming",
          },
          {
            title:"Leveraged Tokens",
            url: "/categories?type=leveraged-tokens",
          },
          {
            title: "Interoperability Coins",
            url: "/categories?type=interoperability-coins",
          },
          {
            title: "Privacy",
            url: "/categories?type=privacy",
          },
          {
            title: "POW",
            url: "/categories?type=pow",
          },
          {
            title: "POS",
            url: "/categories?type=pos",
          },
          {
            title: "dPOS",
            url: "/categories?type=dpos",
          },
          {
            title: "Masternodes",
            url: "/categories?type=masternodes",
          },
          {
            title: "Uniswap",
            url: "/categories?type=uniswap",
            hashtag: [
              "#Blockchain",
              "Ethereum",
              "Sectors",
              "AMM",
              "DeFi",
              "DEX",
              "Exchange",
              "Token",
            ],
          },
        ],
      },
      // {
      //   title: t("navbar.sector.title"),
      //   url: "/sectors",
      //   submenu: [
      //     {
      //       title: t("navbar.sector.all"),
      //       url: "/sectors",
      //     },
      //     {
      //       title: t("navbar.sector.business_service"),
      //       url: "/sectors?type=business-service",
      //     },
      //     {
      //       title: t("navbar.sector.gaming"),
      //       url: "/sectors?type=gaming",
      //     },
      //     {
      //       title: t("navbar.sector.marketplace"),
      //       url: "/sectors?type=marketplace",
      //     },

      //     {
      //       title: t("navbar.sector.exchange"),
      //       url: "/sectors?type=exchange",
      //     },

      //     {
      //       title: t("navbar.sector.social"),
      //       url: "/sectors?type=social",
      //     },
      //     {
      //       title: t("navbar.sector.entertainment"),
      //       url: "/sectors?type=/entertainment",
      //     },
      //     {
      //       title: t("navbar.sector.computing"),
      //       url: "/sectors?type=computing",
      //     },
      //     {
      //       title: t("navbar.sector.governance"),
      //       url: "/sectors?type=governance",
      //     },

      //     {
      //       title: t("navbar.sector.virtual_reality"),
      //       url: "/sectors?type=virtual-reality",
      //     },
      //     {
      //       title: t("navbar.sector.metaverse"),
      //       url: "/sectors?type=metaverse",
      //     },

      //     {
      //       title: t("navbar.sector.fan_tokens"),
      //       url: "/sectors?type=fan-tokens",
      //     },
      //     {
      //       title: t("navbar.sector.lending"),
      //       url: "/sectors?type=lending-borrowing",
      //     },
      //     {
      //       title: t("navbar.sector.meme"),
      //       url: "/sectors?type=meme",
      //     },
      //     {
      //       title: t("navbar.sector.iot"),
      //       url: "/sectors?type=iot",
      //     },
      //     {
      //       title: t("navbar.sector.content_creation"),
      //       url: "/sectors?type=content-creation",
      //     },
      //   ],
      // },
      {
        title: t("navbar.blockchain_ecosystem"),
        url: "/blockchain-ecosystem?type=all",
        submenu: [
          {
            title: t("crypto_assets.sidebar.all_ecosystem"),
            url: "/blockchain-ecosystem?type=all",
          },
          { title: "Ethereum", url: "/blockchain-ecosystem?type=ethereum" },
          { title: "Polkadot", url: "/blockchain-ecosystem?type=polkadot" },
          { title: "Cosmos", url: "/blockchain-ecosystem?type=cosmos" },
          { title: "Solana", url: "/blockchain-ecosystem?type=solana" },
          { title: "Avalanche", url: "/blockchain-ecosystem?type=avalanche" },
          { title: "Near", url: "/blockchain-ecosystem?type=near" },
          { title: "Celo", url: "/blockchain-ecosystem?type=celo" },
        ],
      },
    ],
    [t]
  );

  return {
    menuItems,
  };
};
