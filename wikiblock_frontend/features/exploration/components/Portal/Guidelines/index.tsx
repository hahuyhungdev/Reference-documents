import Page from "@components/Pagination";
import { Typography } from "@components/Typography";
import ItemContent from "@features/exploration/components/components/item-content";
import main from "@features/exploration/components/main.module.css";
import { menuAnalysis } from "@features/exploration/data/analysis";
import { explorationConfig } from "@features/exploration/exploration.config";
import { useGetNavigation } from "@features/exploration/hooks/navigation";
import clsx from "clsx";
import { omit } from "lodash";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { I18nActiveNamespaces } from "types/i18n";

import s from "./index.module.css";
export const Guidelines: any = () => {
  const { t } = useTranslation<I18nActiveNamespaces<"common" | "exploration">>(
    explorationConfig.i18nNamespaces
  );
  const { navigationGuidelines } = useGetNavigation();
  const router = useRouter();
  return (
    <div className="m-10">
      <Typography
        className="font-semibold text-[20px] uppercase mb-[10px]"
        color="primary"
      >
        {t("common:navbar-exploration.guidelines")}
      </Typography>
      <p className="text-[#000000] text-[14px] font-nomal">
        {t("exploration:guidelines.description")}
      </p>
      <div className="my-5">
        <div className={clsx(main["contain-nav"])}>
          <div className={clsx(main["nav"], s["nav-item"])}>
            {navigationGuidelines.map((item, index) => {
              return (
                <li
                  key={index}
                  className={clsx({
                    isActive_Navbar: item.url?.includes(
                      router.query.category as string
                    ),
                  })}
                >
                  <Link href={item.url}>
                    <a>{item.title}</a>
                  </Link>
                </li>
              );
            })}
          </div>
        </div>
        <div className={clsx(main["maincontent"])}>
          {/* {menuAnalysis.map((item, index) => {
            return (
              <ItemContent
                key={index}
                {...omit(item, ["author", "image_author"]) as any}
              />
            );
          })} */}
        </div>
        <div className="text-center my-10">
          <Page />
        </div>
      </div>
    </div>
  );
};

export default Guidelines;
