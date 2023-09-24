import { Typography } from "@components/Typography";
import CircleChart from "@features/categories/components/CircleChart";
import { useTranslation } from "react-i18next";
import { I18nActiveNamespaces } from "types/i18n";

import { tokenConfig } from "../token.config";

export const TokenAllocation = () => {
  const { t } = useTranslation<
    I18nActiveNamespaces<"common" | "home" | "token">
  >(tokenConfig.i18nNamespaces);
  return (
    <div className="py-4">
      <Typography color="primary" size="large" className="font-bold">
        {t("token:profile.token_allocation")}
      </Typography>
      <CircleChart />
    </div>
  );
};
