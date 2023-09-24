import { Button } from '@components';
import { eventsConfig } from '@features/events/events.config';
import { Event } from '@features/events/events.type';
import EventNoAvatar from '@public/images/event_no_avatar.png';
import clsx from 'clsx';
import dayjs from 'dayjs';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { I18nActiveNamespaces } from 'types/i18n';

import EventRegisterModal from '../EventRegisterModal';
import s from './card.module.css';

interface Props {
  event: Event;
}

const EventsCard: FC<Props> = ({ event }) => {
  const { t } = useTranslation<I18nActiveNamespaces<'common' | 'events'>>(eventsConfig.i18nNamespaces);
  const [isShowModal, setIsShowModal] = useState(false);

  const router = useRouter();
  return (
    <React.Fragment>
      <div
        className={clsx(
          'w-full max-w-[320px] p-0 border-[1px] border-gray-300 pb-[28px] cursor-pointer transition-all relative 2xl:max-w-[300px] 2xl:min-w-[280px] xl:min-w-[320px] xl:max-w-[400px] lg:min-w-fit lg:max-w-[380px] sm:min-w-[200px]',
          s['card'],
        )}
      >
        <div className={clsx('transition-all', s['card-shadow'])}>
          <div className="flex flex-col gap-[16px]">
            <Button
              className="w-[89px] h-[30px] flex items-center justify-center bg-blue-600 hover:opacity-[0.7]"
              onClick={() => router.push(`/events/${event.id}`)}
            >
              <span className="text-[13px] font-medium text-white">{t('events:detail_button')}</span>
            </Button>
            <Button
              className="w-[89px] h-[30px] flex items-center justify-center bg-blue-600 hover:opacity-[0.7]"
              onClick={() => setIsShowModal(true)}
            >
              <span className="text-[13px] font-medium text-white">{t('events:register_button')}</span>
            </Button>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1544509099-047faa4b96ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NXxzcVd4c19palZMMHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60')`,
          }}
          className="h-[89px] w-full bg-cover bg-center bg-no-repeat"
        ></div>
        <div className="mx-auto mt-[-50px] w-fit rounded-full border-[4px] border-white">
          <Image src={event.avatar || EventNoAvatar} alt={'a'} width={100} height={100} className="rounded-full" />
        </div>
        <div>
          <h4 className="text-gray-900 text-[14px] font-bold text-center mb-[9px] opacity-[0.8]">{event.name ?? ''}</h4>
          <span className="text-[#adadad] text-[14px] block text-center">
            {dayjs(event.start_date).format('DD MMM YYYY')} - {dayjs(event.end_date).format('DD MMM YYYY')}
          </span>
          <span className="text-gray-900 text-[14px] font-semibold block text-center opacity-[0.8] capitalize">
            {event.type} Event
          </span>
        </div>
      </div>
      <EventRegisterModal
        event={event}
        title={t('events:registration')}
        centered
        show={isShowModal}
        onClose={() => setIsShowModal(false)}
      />
    </React.Fragment>
  );
};

export default EventsCard;
