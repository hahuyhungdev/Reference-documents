// import { IconCopyright } from "@components/Icons/IconCopyright";
import { FooterList } from "@components/FooterList";
import { Typography } from "@components/Typography";
import { layoutConfig } from "@features/layout/layout.config";
import { useTranslation } from "next-i18next";
import React from "react";
import { BsYoutube } from "react-icons/bs";
import { BsDiscord } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { FaPaperPlane } from "react-icons/fa";
export const Footer = () => {
  const { t } = useTranslation(layoutConfig.i18nNamespaces);

  return (
    <div className="footer">
      <div className="px-24 pt-11 lg:px-4 ">
        <FooterList />
      </div>
      <div className="border-t-2  border-[#DEE1ED]">
        <div
          className="flex items-center h-[60px] sm:h-full justify-between px-24
            md:grid md:grid-cols-3 md:px-0"
        >
          {/* DIV 01 */}
          <div className="md:col-span-3 md:text-center md:mt-2">
            <span className="text-[#587088] text-[16px]">
              &copy;2022 Wikiblock.com
            </span>
          </div>
          {/* End DIV 01 */}

          {/* DIV 02 */}
          <div className="flex justify-around gap-[3rem] md:col-span-2 sm:col-span-3 md:space-x-1 sm:gap-[2px]">
            <div className="">
              <Typography size={"medium"}>
                <span className="text-[#587088]">{t("footer.terms")}</span>
              </Typography>
            </div>
            <div className="">
              <Typography size={"medium"}>
                <span className="text-[#587088]">{t("footer.privacy")}</span>
              </Typography>
            </div>
            <div className="">
              <Typography size={"medium"}>
                <span className="text-[#587088]">{t("footer.media_kit")}</span>
              </Typography>
            </div>
            <div className="">
              <Typography size={"medium"}>
                <span className="text-[#587088]">{t("footer.status")}</span>
              </Typography>
            </div>
            <div className="">
              <Typography size={"medium"}>
                <span className="text-[#587088]">Changelog</span>
              </Typography>
            </div>
          </div>
          {/* END DIV 02 */}
          {/* DIV 03 */}
          <div className="flex gap-x-3 justify-center md:col-span-1 md:my-2 sm:col-span-3">
            <div className="">
              <span className="text-[#587088]">
                <BsYoutube size="20px" />
              </span>
            </div>
            <div className="">
              <span className="text-[#587088]">
                <FaPaperPlane size="17px" />
              </span>
            </div>
            <div className="">
              <span className="text-[#587088]">
                <BsDiscord size="17px" />
              </span>
            </div>
            <div className="">
              <span className="text-[#587088]">
                <BsTwitter size="17px" />
              </span>
            </div>
            <div className="">
              <span className="text-[#587088]">
                <BsFacebook size="17px" />
              </span>
            </div>
          </div>
          {/* END DIV 03 */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
