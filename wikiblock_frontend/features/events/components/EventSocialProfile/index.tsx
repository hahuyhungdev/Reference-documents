import { eventsConfig } from "@features/events/events.config";
import { Event } from "@features/events/events.type";
import BBCLearningImg from "@public/images/bbc-learning.png";
import BitcoinImg from "@public/images/bitcoin.png";
import FacebookLogo from "@public/images/facebook.png";
import GithubLogo from "@public/images/github.png";
import TwitterLogo from "@public/images/twitter.png";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { useTranslation } from "react-i18next";

interface Props {
  event: Event;
}

const EventSocialProfile: FC<Props> = ({ event }) => {
  const { t } = useTranslation(eventsConfig.i18nNamespaces);
  return (
    <div className="mt-[24px] pt-[21px] pb-[30px] px-[22px] bg-white border-[1px] border-[#ADADAD] border-dashed rounded-[10px]">
      <h4 className="text-[16px] text-gray-900 font-semibold opacity-[0.9] mb-[20px]">
        {t("events:event_social_profile")}
      </h4>
      <div className="flex items-center gap-x-[15px] mb-[20px]">
        {event.twitter && (
          <Link href={event.twitter}>
            <a
              className="relative w-[32px] h-[32px] cursor-pointer"
              target="_blank"
            >
              <Image
                src={TwitterLogo}
                alt="twitter-logo"
                layout="fill"
                objectFit="cover"
              />
            </a>
          </Link>
        )}
        {event.facebook && (
          <Link href={event.facebook}>
            <a
              className="relative w-[32px] h-[32px] cursor-pointer"
              target="_blank"
            >
              <Image
                src={FacebookLogo}
                alt="facebook-logo"
                layout="fill"
                objectFit="cover"
              />
            </a>
          </Link>
        )}
        {event.github && (
          <Link href={event.github}>
            <a
              className="relative w-[32px] h-[32px] cursor-pointer"
              target="_blank"
            >
              <Image
                src={GithubLogo}
                alt="github-logo"
                layout="fill"
                objectFit="cover"
              />
            </a>
          </Link>
        )}
      </div>
      <h4 className="text-[16px] text-gray-900 font-semibold opacity-[0.9] mb-[20px]">
        {t("events:event_media")}
      </h4>
      <div className="w-full h-[140px] relative mb-[32px]">
        <Image src={BBCLearningImg} alt="bbc-learning" layout="fill" />
      </div>
      <div className="grid grid-cols-2 gap-x-[14px] gap-y-[8px]">
        {new Array(6).fill(0).map((_, index) => (
          <div key={`bitcoin-${index}`}>
            <Image src={BitcoinImg} alt="bitcoin" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventSocialProfile;
