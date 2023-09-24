import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { I18nActiveNamespaces } from "types/i18n";

import { tokenConfig } from "../token.config";
import Fundraising from "./Fundraising";
import { Organization } from "./Organization";
import { TechnologyFeatures } from "./TechnologyFeatures";
import { TokenAllocation } from "./TokenAllocation";
import { TokenomicVesting } from "./TokenomicVesting";

export type Prop = {
  title?: string;
  description?: string;
};

export const Profile = () => {
  const { t } = useTranslation<
    I18nActiveNamespaces<"common" | "home" | "token">
  >(tokenConfig.i18nNamespaces);
  const { ref: profile, inView: profileElementIsVisible } = useInView();
  return (
    <div className="my-5">
      <div className="py-3 border-b-[1px] border-[#CACACA] mb-5">
        <h2 className="text-[20px] text-[#4992D6] font-bold mb-2">
          {t("token:profile.introduction")}
        </h2>
        <p className="text-[#353535] font-normal">
          Since its inception, the Uniswap Protocol (“Uniswap”) has served as a
          trustless and highly decentralized financial infrastructure. Having
          proven product-market fit for highly decentralized financial
          infrastructure with a platform that has thrived independently, Uniswap
          is now well-positioned for community-led growth, development, and
          self-sustainability. particularly
        </p>
      </div>
      <TechnologyFeatures key="technology" />
      <Organization key="organization" />
      <Fundraising />
      <TokenomicVesting />
      <TokenAllocation />
    </div>
  );
};
