import { StackedBar } from "@components/ChartJs";
import { Typography } from "@components/Typography";
import CircleChart from "@features/categories/components/CircleChart";
import { useTranslation } from "react-i18next";
import { I18nActiveNamespaces } from "types/i18n";

import { tokenConfig } from "../token.config";

export const TokenomicVesting = () => {
  const { t } = useTranslation<
    I18nActiveNamespaces<"common" | "home" | "token">
  >(tokenConfig.i18nNamespaces);
  return (
    <div className="py-3 border-b-[1px] pb-4">
      <div>
        <Typography color="primary" size="large" className="font-bold">
          {t("token:profile.tokenomic_vesting")}
        </Typography>
        <p className="text-[#929292]">{t("token:profile.key_notes")}</p>
        <div className="text-[#494949]">
          <span>
            {t("token:profile.general_emission_type")}: Deflationary &emsp;
            {t("token:profile.precise_emission_type")}: Non-programmatic burn
          </span>
        </div>
        <div className="text-[#494949]">
          <span>{t("token:profile.capped_supply")}: Yes</span>
        </div>
      </div>
      <div>
        <p className="text-[#929292]">
          {t("token:profile.vesting_historical_data")}:
        </p>
        <ul className=" pl-8">
          <li className="list-disc">Gía tăng 30-100% trước 1 tuần</li>
          <li className="list-disc">Giá giảm 50-200% sau vesting 1-2 ngày</li>
          <li className="list-disc">Qũy không bán</li>
        </ul>
      </div>
      <div className="mt-2">
        <StackedBar />
      </div>
    </div>
  );
};
