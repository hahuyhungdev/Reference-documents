import { useTranslation } from "react-i18next";
import { I18nActiveNamespaces } from "types/i18n";

import { tokenConfig } from "../token.config";
export type Prop = {
  title?: string;
  description?: string;
};

export const TechnologyFeatures = () => {
  const { t } = useTranslation<
    I18nActiveNamespaces<"common" | "home" | "token">
  >(tokenConfig.i18nNamespaces);
  const myuniswap = [
    {
      title: t("token:profile.technology"),
      description: "Consensus \nProof of Stake (PoS)",
    },
    {
      title: t("token:profile.features"),
      description: `- Speed-The Avalanche platform uses a novel consensus protocol created by distributed systems researchers in 2018, also called 'Avalanche', to permanently confirm transactions in 1-2 seconds.\n- Scalability - Avalanche handles thousands of transaction per second and can accommotade thousands of validators with no loss of performsnce.`,
    },
  ];
  return (
    <div className="py-5 border-b-[1px] border-[#CACACA] mb-5">
      {myuniswap.map((item, index) => {
        return (
          <div className="mb-5" key={"technology" + index}>
            <h2 className="mb-2 text-[20px] text-[#4992D6] font-bold">
              {item.title}
            </h2>
            <p className="text-[#353535] font-normal">{item.description}</p>
          </div>
        );
      })}
    </div>
  );
};
