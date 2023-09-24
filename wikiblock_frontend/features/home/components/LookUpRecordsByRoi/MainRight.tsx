import "antd/dist/antd.css";

import { BasicBar } from "@components/ChartJs";
import { overviewConfig } from "@features/example/example.config";
import clsx from "clsx";
import { useTranslation } from "react-i18next";
import { I18nActiveNamespaces } from "types/i18n";

import s from "./lookuprecords.module.css";
export const MainRight = () => {
  const { t } = useTranslation<I18nActiveNamespaces<"common" | "home">>(
    overviewConfig.i18nNamespaces
  );
  return (
    <div className={clsx(s["mainRight"])}>
       <BasicBar/>
    </div>
  );
};
