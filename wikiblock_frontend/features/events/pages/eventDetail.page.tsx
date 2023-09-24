import DefaultLayout from "@features/layout/components/DefaultLayout";
import BannerImage from "@public/images/workshop-banner.png";
import { isEmpty } from "lodash";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { FC, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { I18nActiveNamespaces } from "types/i18n";

import EventContact from "../components/EventContact";
import EventRegisterModal from "../components/EventRegisterModal";
import EventRegistration from "../components/EventRegistration";
import EventSocialProfile from "../components/EventSocialProfile";
import RelativeEvents from "../components/RelativeEvents";
import WorkshopInfo from "../components/WorkshopInfo/WorkshopInfo";
import WorkshopMap from "../components/WorkshopMap";
import WorkshopSpeaker from "../components/WorkshopSpeaker";
import WorkshopSponsors from "../components/WorkshopSponsors";
import {
  useGetEventByIdMutation,
  useGetRelatedEventsMutation,
} from "../event.service";
import { eventsConfig } from "../events.config";
import { Event } from "../events.type";

interface Props {
  event: Event;
}

const EventDetailPage: FC<Props> = ({ event }) => {
  const { t } = useTranslation<I18nActiveNamespaces<"common" | "events">>(
    eventsConfig.i18nNamespaces
  );
  const [getRelatedEvents, { data: relatedEvents }] =
    useGetRelatedEventsMutation();

  const [isShowModal, setIsShowModal] = useState(false);
  const router = useRouter();

  useEffect(() => {
    getRelatedEvents({ page: 1, per_page: 10 });
  }, []);

  return (
    <DefaultLayout>
      <div className="pb-[30px]">
        <div className="w-full h-[400px] mt-[18px] relative lg:h-[350px] md:h-[250px] sm:h-[200px] mb:h-[150px]">
          <Image src={BannerImage} alt="banner-workshop" layout="fill" />
        </div>
        {/* for screen < 1024px */}
        <div className="lg:block hidden max-w-[327px] mt-[35px]">
          {event && (
            <EventRegistration
              event={event}
              handleShowModalRegister={() => setIsShowModal(true)}
            />
          )}
          {/*  */}
        </div>
        <div className="mt-[48px] grid grid-cols-3 lg:grid-cols-1">
          <div className="col-span-2">
            {event && (
              <React.Fragment>
                <WorkshopInfo event={event} />
                {!isEmpty(event.speakers) && <WorkshopSpeaker event={event} />}
                {!isEmpty(event.sponsors) && <WorkshopSponsors event={event} />}
                <WorkshopMap />
                <RelativeEvents events={relatedEvents?.items || []} />
              </React.Fragment>
            )}
          </div>
          <div className="max-w-[327px] ml-auto lg:flex lg:justify-between lg:gap-x-[30px] lg:items-start lg:mt-[30px] lg:max-w-full lg:w-full md:flex-col md:items-stretch">
            {/* for screen >= 1024 */}
            {event && (
              <React.Fragment>
                <div className="lg:hidden">
                  <EventRegistration
                    handleShowModalRegister={() => setIsShowModal(true)}
                    event={event}
                  />
                </div>
                <EventContact event={event} />
                <EventSocialProfile event={event} />
              </React.Fragment>
            )}
            {/*  */}
          </div>
        </div>
      </div>
      {event && (
        <EventRegisterModal
          title={t("events:registration")}
          centered
          show={isShowModal}
          onClose={() => setIsShowModal(false)}
          event={event}
        />
      )}
    </DefaultLayout>
  );
};

export default EventDetailPage;
