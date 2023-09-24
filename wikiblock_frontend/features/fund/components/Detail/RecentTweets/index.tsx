import { Typography } from "@components/Typography";
import { fundConfig } from "@features/fund/fund.config";
import { useTranslation } from "react-i18next";

export const RecentTweets = () => {
  const { t } = useTranslation(fundConfig.i18nNamespaces);
  return (
    <div className="mt-[26px]">
      <Typography
        className="font-semibold text-[20px] sm:text-[16px]"
        color="primary"
      >
        {t("fund:detail_overview.recent_tweets")}
      </Typography>
      <div className="mt-[26px] mb-3">
        <a className="twitter-timeline tw-align-center"
          data-height="600" href="https://twitter.com/coinbase?ref_src=twsrc%5Etfw">Tweets by coinbase</a>
      </div>
    </div>
  );
};
