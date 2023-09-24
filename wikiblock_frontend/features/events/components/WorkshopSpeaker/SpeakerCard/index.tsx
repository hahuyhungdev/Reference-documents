import { Person } from "@features/events/events.type";
import FacebookLogo from "@public/images/facebook.png";
import GithubLogo from "@public/images/github.png";
import LinkedinLogo from "@public/images/linkedin.png";
import TwitterLogo from "@public/images/twitter.png";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
interface Props {
  speaker: Person;
}

const SpeakerCard: FC<Props> = ({ speaker }) => {
  return (
    <div className="flex flex-col items-center w-full max-w-[200px]">
      {speaker.avatar && (
        <div className="w-[65px] h-[65px] relative rounded-full mb-[3px]">
          <Image
            src={speaker.avatar}
            alt={`${speaker.name}`}
            layout="fill"
            className="rounded-full"
          />
        </div>
      )}
      <h4 className="text-[14px] text-[#353535] font-medium opacity-[0.85] whitespace-nowrap">
        {speaker.name}
      </h4>
      {speaker.position && (
        <span className="text-[12px] text-[#565656] whitespace-nowrap">
          {speaker.position}
        </span>
      )}
      {speaker.works && (
        <span className="text-[12px] text-[#333333] text-center font-medium opacity-[0.85] mb-[8px]">
          {speaker.works[0].title}
        </span>
      )}
      <div className="flex items-center gap-x-[5px]">
        {speaker.twitter && (
          <Link href={speaker.twitter}>
            <a className="w-[26px] h-[26px] relative" target="_blank">
              <Image
                src={TwitterLogo}
                alt="twitter-logo"
                layout="fill"
                objectFit="cover"
              />
            </a>
          </Link>
        )}
        {speaker.facebook && (
          <Link href={speaker.facebook}>
            <a className="w-[26px] h-[26px] relative" target="_blank">
              <Image
                src={FacebookLogo}
                alt="facebook-logo"
                layout="fill"
                objectFit="cover"
              />
            </a>
          </Link>
        )}
        {speaker.linkedin && (
          <Link href={speaker.linkedin}>
            <a className="w-[26px] h-[26px] relative" target="_blank">
              <Image
                src={LinkedinLogo}
                alt="linkedin-logo"
                layout="fill"
                objectFit="cover"
              />
            </a>
          </Link>
        )}
        {speaker.github && (
          <Link href={speaker.github}>
            <a className="w-[26px] h-[26px] relative" target="_blank">
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
    </div>
  );
};

export default SpeakerCard;
