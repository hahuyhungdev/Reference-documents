import { Button } from "@components";
import { eventsConfig } from "@features/events/events.config";
import { Event } from "@features/events/events.type";
import { Affix } from "antd";
import React, { FC } from "react";
import { useTranslation } from "react-i18next";

interface Props {
  handleShowModalRegister: () => void;
  event: Event;
}

const EventRegistration: FC<Props> = ({ handleShowModalRegister, event }) => {
  const { t } = useTranslation(eventsConfig.i18nNamespaces);
  return (
    <React.Fragment>
      {/* for desktop */}
      <Affix offsetTop={80} className="lg:hidden">
        <div className="py-[30px] px-[40px] bg-white border-[1px] border-[#ADADAD] border-dashed rounded-[10px]">
          <div className="flex items-center gap-x-[18px]">
            {event.start_date &&
            event.end_date &&
            new Date(event.end_date).getTime() > new Date().getTime() ? (
              <React.Fragment>
                <Button className="w-[116px] h-[35px] bg-blue-600 rounded-[5px] flex items-center justify-center hover:opacity-[0.8]">
                  <span className="text-[13px] text-white font-semibold">
                    {t("events:save_date_button")}
                  </span>
                </Button>
                <Button
                  className="w-[116px] h-[35px] bg-blue-600 rounded-[5px] flex items-center justify-center hover:opacity-[0.8]"
                  onClick={() => handleShowModalRegister()}
                >
                  <span className="text-[13px] text-white font-semibold">
                    {t("events:register_button")}
                  </span>
                </Button>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Button className="w-[116px] h-[35px] bg-blue-600 rounded-[5px] flex items-center justify-center hover:opacity-[0.8]">
                  <span className="text-[13px] text-white font-semibold">
                    {t("events:slide_button")}
                  </span>
                </Button>
                <Button className="w-[116px] h-[35px] bg-blue-600 rounded-[5px] flex items-center justify-center hover:opacity-[0.8]">
                  <span className="text-[13px] text-white font-semibold">
                    {t("events:recap_button")}
                  </span>
                </Button>
              </React.Fragment>
            )}
          </div>
          <div className="mt-[20px] mb-[16px]">
            <span className="text-[14px] text-gray-900 font-medium mr-[20px] opacity-[0.85]">
              {t("events:ticket")}:
            </span>
            <span className="text-[14px] font-medium text-btn-primary">
              $50,0
            </span>
          </div>
          <div className="flex items-center">
            <span className="text-[14px] text-gray-900 font-medium mr-[20px] whitespace-nowrap opacity-[0.85]">
              {t("events:voucher_code")}:
            </span>
            <div className="px-[3px] py-[2px] border-[1px] border-dashed border-btn-primary rounded-[3px] mr-[10px]">
              -50%
            </div>
            <span className="whitespace-nowrap text-[12px] text-[#ADADAD] italic underline">
              {t("events:conditional_here")}
            </span>
          </div>
        </div>
      </Affix>

      {/* for mobile */}
      <div className="py-[30px] px-[40px] bg-white border-[1px] border-[#ADADAD] border-dashed rounded-[10px] hidden lg:block">
        <div className="flex items-center gap-x-[18px]">
          <Button className="w-[116px] h-[35px] bg-blue-600 rounded-[5px] flex items-center justify-center hover:opacity-[0.8]">
            <span className="text-[13px] text-white font-semibold">
              {t("events:save_date_button")}
            </span>
          </Button>
          <Button
            className="w-[116px] h-[35px] bg-blue-600 rounded-[5px] flex items-center justify-center hover:opacity-[0.8]"
            onClick={() => handleShowModalRegister()}
          >
            <span className="text-[13px] text-white font-semibold">
              {t("events:register_button")}
            </span>
          </Button>
        </div>
        <div className="mt-[20px] mb-[16px]">
          <span className="text-[14px] text-gray-900 font-medium mr-[20px] opacity-[0.85]">
            {t("events:ticket")}:
          </span>
          <span className="text-[14px] font-medium text-btn-primary">
            $50,0
          </span>
        </div>
        <div className="flex items-center">
          <span className="text-[14px] text-gray-900 font-medium mr-[20px] whitespace-nowrap opacity-[0.85]">
            {t("events:voucher_code")}:
          </span>
          <div className="px-[3px] py-[2px] border-[1px] border-dashed border-btn-primary rounded-[3px] mr-[10px]">
            -50%
          </div>
          <span className="whitespace-nowrap text-[12px] text-[#ADADAD] italic underline">
            {t("events:conditional_here")}
          </span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default EventRegistration;
