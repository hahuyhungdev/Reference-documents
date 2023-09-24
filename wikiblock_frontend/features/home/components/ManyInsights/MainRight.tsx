import { OnchainSignals } from "@components/ChartJs";
import { IconInfo, IconQuestion } from "@components/Icons";
import { dataTrendingCoin } from "@components/Table/data/dataTrendingCoin";
import { overviewConfig } from "@features/example/example.config";
import { Avatar, Tooltip } from "antd";
import clsx from "clsx";
import { useTranslation } from "react-i18next";
import { HiChevronDoubleRight } from "react-icons/hi";
import { I18nActiveNamespaces } from "types/i18n";

import s from "./manyinsights.module.css";
const network_growth_value = [0.29, 0.29, 0.29, 0.81]
export const MainRight = () => {
  const { t } = useTranslation<I18nActiveNamespaces<"common" | "home">>(
    overviewConfig.i18nNamespaces
  );
  return (
    <div
      className={clsx(
        "reccently_added xl:mt-4 md:m-0 md:col-span-4 xl:col-span-4",
        s["reccently_added"]
      )}
    >
      {/* content */}
      <div
        className={clsx(
          "maininsightsLeft md:block xl:grid xl:grid-cols-2 xl:gap-x-8",
          s["maininsightsLeft"]
        )}
      >
        <div className="">
          <div className="flex md:pb-0 xl:pb-[20px] sm:mt-3 items-center md:mt-[10px]">
            <span className="pt-[10px] pb-[12px] not-italic font-semibold text-base uppercase text-[#050F19]">
              {t("home:reportother.recently")}
            </span>
            <a className="text-[extra_small] inline-block ml-[8px]">
              <HiChevronDoubleRight />
            </a>
          </div>
          <div
            className="content pt-3"
          >
            {dataTrendingCoin.slice(0, 4).map((item, index) => {
              // get the 4 highest item.volatilityDay
              return (
                <div
                  key={index}
                  className="flex justify-between md:justify-items-center mb-2 md:col-span-1">
                  <div className="crypto items-center flex gap-[15px] sm:gap-[5px]">
                    <Avatar src={item.symbol} />
                    <div className="value sm:flex sm:gap-x-2">
                      <span className="">{item.name}</span>
                      {item.volatilityDay ? (
                        (item.volatilityDay || 0) > 0 ? (
                          <div className=" text-[#3ACC8A] ">
                            +{item.volatilityDay}%
                          </div>
                        ) : (
                          <div className=" text-[#DF5F67]">
                            {item.volatilityDay}%
                          </div>
                        )
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                  <div className="text-center">
                    <span>{item.price}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="sectiononchain sm:mt-2">
          <div className="onchainSignals pt-[10px] pb-[12px] border-b-2 boder-[#F5F5F5] ">
            <div>
              <div className="flex items-center justify-between pr-2">
                <div className="not-italic font-semibold text-base uppercase text-[#050F19] ">
                  {t("home:reportother.onchain_signals")}
                </div>
                {/* Tooltip hava IconInfo */}
                <Tooltip title="The first version is real-time">
                  <div>
                    <IconInfo />
                  </div>
                </Tooltip>
              </div>

              <div className="not-italic font-normal text-xs leading-3 text-gray-700 mt-[1px] ">
                Secondary text
              </div>
            </div>
          </div>
          <div className="md:flex md:justify-evenly items-end sm:block pr-2">
            <div
              className={clsx(
                "mt-[10px] lg:items-end lg:justify-around md:block flex xl:items-end items-end",
                s["mainOnchainSignals"]
              )}
            >
              {/* <div className="sm:flex sm:justify-center sm:items-center"> */}
              <img className="mx-auto w-[90%]" src="https://alternative.me/crypto/fear-and-greed-index.png" alt="" />
              {/* </div> */}
              {/* <div className="list-none md:flex md:gap-x-2 md:mt-1 md:justify-center sm:mt-3">
                <li>
                  <span className="h-1 font-normal text-xs leading-3 text-red-600 mr-[2px]">
                    3
                  </span>
                  <span className="font-normal leading-3 text-xs text-[#8C8C8C]">
                    BEARISH
                  </span>
                </li>
                <li>
                  <span className="font-normal leading-3 text-xs text-[#BABCD4] mr-[2px]">
                    0
                  </span>
                  <span className="font-normal leading-3 text-xs text-[#8C8C8C]">
                    NEUTRAL
                  </span>
                </li>
                <li>
                  <span className="mr-[2px] text-xs text-[#73D780]">1</span>
                  <span className="font-normal text-xs leading-3 text-[#8C8C8C]">
                    BULLISH
                  </span>
                </li>
              </div> */}
            </div>
            {/* <div className="groupnetworkGrowth mt-3">
              {network_growth_value.map((item, index) => {
                return (
                  <div key={index} className="networkGrowth flex justify-between md:justify-evenly sm:gap-x-3 w-full mb-[10px]">
                    <div className="flex items-center">
                      <div className="mr-[5px] font-normal text-xs leading-3 text-[#5685F8]">
                      {t("home:reportother.net_network_growth")}
                      </div>
                      <IconQuestion />
                    </div>
                    <div className="font-normal text-xs leading-3 text-right text-red-600">
                      {
                        item < 0.50 ? (
                          <div>
                            <span className="mr-[3px]">{item}</span>
                            <span>Bearish</span>
                          </div>) : (
                          <div> <span className="text-[#60D539] mr-[3px]">{item}%</span>
                            <span className="text-[#60D539]">Bearish</span>
                          </div>
                        )
                      }
                    </div>
                  </div>
                )
              })}
            </div> */}
          </div>
        </div>
      </div>

      {/*end content */}
    </div>
  );
}