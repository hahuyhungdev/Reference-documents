import { Typography } from "@components/Typography";
import clsx from "clsx";
import { useTranslation } from "react-i18next";
import { IoMdCompass } from "react-icons/io";
import { I18nActiveNamespaces } from "types/i18n";

import { tokenConfig } from "../token.config";
import s from "../token.module.css";
import { OrganzationList } from "./OrganizationList";

export type Prop = {
  title?: string;
  description?: string;
  icon?: JSX.Element[];
  image: string;
};
type mybuttonOrganizationProps = {
  [key: string]: any;
  icon?: JSX.Element;
}
const mybuttonOrganization: Array<mybuttonOrganizationProps> = [
  {
    icon: <IoMdCompass />,
    name: "Parent Company",
    name_color: "#666666",
    note_font_weight: "Ava Labs",
    note_color: "#000000",
  },
  {
    name: "Reg. Location",
    name_color: "#666666",
    note_font_weight: "United States",
    note_color: "#000000",
  },
  {
    name: "Team",
    name_color: "#666666",
    note_font_weight: "200+ Employees",
    note_color: "#000000",
  },
];

export const Organization = () => {
  const { t } = useTranslation<
    I18nActiveNamespaces<"common" | "home" | "token">
  >(tokenConfig.i18nNamespaces);
  return (
    <div>
      <div className="pb-3">
        <Typography color="primary" size="large" className="font-bold">
          {t("token:profile.organization_team")}
        </Typography>
      </div>
      <div className={clsx(s["organization_ul"])}>
        {mybuttonOrganization.map((item, index) => {
          return (
            <div key={"btn_organzation" + index} className="pr-4">
              <button className="flex border items-center py-1.5 pr-5 mb-5">
                <span className="px-1.5 whitespace-nowrap">{item.icon}</span>
                <span className="text-[#666666] whitespace-nowrap">
                  {item.name} &nbsp;
                </span>
                <span className="text-[#666666] whitespace-nowrap">
                  {item.note_font_weight}
                </span>
              </button>
            </div>
          );
        })}
      </div>
      <div className="mb-4">
        <OrganzationList />
      </div>
    </div>
  );
};
