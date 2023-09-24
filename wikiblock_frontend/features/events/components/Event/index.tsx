import { Button } from "@components";
import { Event as EventType } from "@features/events/events.type";
import dayjs from "dayjs";
import Link from "next/link";
import React, { FC } from "react";

interface Props {
  event: EventType;
}

const Event: FC<Props> = ({ event }) => {
  return (
    <div className="flex flex-col">
      <Link href={`/events/${event.id}`} passHref>
        <h4 className="text-black text-[14px] mb-[5px] opacity-[0.85] cursor-pointer transition hover:text-btn-primary">
          {event.name}
        </h4>
      </Link>
      <span className="mt-[0] text-[#ADADAD] text-[14px]">
        {dayjs(event.start_date).format("DD MMM YYYY")}
      </span>
      {/* {event.location && (
        <span className="text-black text-[14px] font-medium mt-[10px] opacity-[0.85]">
          {event.location}
        </span>
      )} */}
      <div className="mt-[15px] flex items-center gap-x-[12px]">
        {/* <Button className="px-[10px] py-[8px] bg-[#EFF0F4] rounded-[3px]">
          <span className="text-bold font-semibold text-[13px] opacity-[0.85]">
            Etherium
          </span>
        </Button>
        <Button className="px-[10px] py-[8px] bg-[#EFF0F4] rounded-[3px]">
          <span className="text-bold font-semibold text-[13px] opacity-[0.85]">
            Hackathon
          </span>
        </Button> */}
        {event.categories &&
          event.categories.map((cate) => (
            <Button
              className="px-[10px] py-[8px] bg-[#EFF0F4] rounded-[3px]"
              key={cate.id}
            >
              <span className="text-bold font-semibold text-[13px] opacity-[0.85]">
                {cate.title}
              </span>
            </Button>
          ))}
      </div>
    </div>
  );
};

export default Event;
