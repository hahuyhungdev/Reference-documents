import Item from 'antd/lib/list/Item';
import Image from 'next/image';
import { FC } from 'react';
import { AiFillLinkedin, AiFillYoutube, AiOutlineMedium, AiOutlineTwitter } from 'react-icons/ai';
import { BsDiscord } from 'react-icons/bs';
import { IoIosPaperPlane, IoLogoGithub } from 'react-icons/io';
import { MdRssFeed } from 'react-icons/md';
import { RiInstagramLine } from 'react-icons/ri';

import s from './profile.module.css';

const MyOrganzationTeamList = [
  {
    image: '/images/abdalla_kablan.png',
    name: 'Abdalla Kablan',
    description: 'Executive Chairman @',
    icons: [
      <AiOutlineTwitter key={'icon-twitter'} />,
      <AiFillLinkedin key={'icon-linkedin'} />,
      <IoLogoGithub key={'icon-githup'} />,
    ],
  },
  {
    image: '/images/adam_back.png',
    name: 'Adam Back',
    description: 'CEO & Co-Founder @ Blockstream',
    icons: [
      <AiOutlineTwitter key={'icon-twitter'} />,
      <AiFillLinkedin key={'icon-linkedin'} />,
      <IoLogoGithub key={'icon-githup'} />,
    ],
  },
  {
    image: '/images/adam_levy.png',
    name: 'Adam Levy',
    description: 'Founder & Host, 2021-current @ \nMint Podcast',
    icons: [
      <AiOutlineTwitter key={'icon-twitter'} />,
      <AiFillLinkedin key={'icon-linkedin'} />,
      <MdRssFeed key={'icon-feed'} />,
      <AiFillYoutube key={'icon-youtube'} />,
      <RiInstagramLine key={'icon-tagram'} />,
    ],
  },
  {
    image: '/images/abdalla_kablan.png',
    name: 'Abdalla Kablan',
    description: 'Executive Chairman @',
    icons: [
      <AiOutlineTwitter key={'icon-twitter'} />,
      <AiFillLinkedin key={'icon-linkedin'} />,
      <IoLogoGithub key={'icon-githup'} />,
    ],
  },
  {
    image: '/images/adam_back.png',
    name: 'Adam Back',
    description: 'CEO & Co-Founder @ Blockstream',
    icons: [
      <AiOutlineTwitter key={'icon-twitter'} />,
      <AiFillLinkedin key={'icon-linkedin'} />,
      <IoLogoGithub key={'icon-githup'} />,
    ],
  },
  {
    image: '/images/adam_levy.png',
    name: 'Adam Levy',
    description: 'Founder & Host, 2021-current @ \nMint Podcast',
    icons: [
      <AiOutlineTwitter key={'icon-twitter'} />,
      <AiFillLinkedin key={'icon-linkedin'} />,
      <MdRssFeed key={'icon-feed'} />,
      <AiFillYoutube key={'icon-youtube'} />,
      <RiInstagramLine key={'icon-tagram'} />,
    ],
  },
];

export type Item = {
  image: string;
  name?: string;
  description: string;
  avatar?: string;
  icons?: JSX.Element[];
};
export type Props = {
  item: Item;
};

export const ProOrganzationItem: FC<Props> = ({ item: { image, name, avatar } = {} }) => {
  return (
    <div className="flex">
      <div className="text-center pr-4">
        <img src={avatar || '/images/adam_levy.png'} alt="" />
      </div>
      <div>
        <div className="flex flex-col">
          <div className="mb-2">
            <h2 className="text-[13px] text-[#0F0F1B] font-normal">{name}</h2>
          </div>
          <div className="flex bg-gray-200	space-x-1 px-2 ">
            <a href={''}>
              <AiOutlineTwitter key={'icon-twitter'} />
            </a>
            <a href={''}>
              <IoIosPaperPlane key={'icon-plane'} />
            </a>
            <a href={''}>
              <AiOutlineMedium key={'icon-medium'} />
            </a>
            <a href={''}>
              <BsDiscord key={'icon-discord'} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export type PropOrganzationList = {
  // name: string;
  // items: Array<Item>;
};
export const OrganzationList: FC<PropOrganzationList> = () => {
  return (
    <div>
      <div>
        {MyOrganzationTeamList.map((item, index) => {
          if (index % 3 == 0) {
            return (
              <div key={index} className={s['contain-items']}>
                <div className={s['item']}>
                  <ProOrganzationItem item={MyOrganzationTeamList[index]} key="1" />
                </div>
                <div className={s['item']}>
                  <ProOrganzationItem item={MyOrganzationTeamList[index + 1]} key="2" />
                </div>
                <div className={s['item']}>
                  <ProOrganzationItem item={MyOrganzationTeamList[index + 2]} key="3" />
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};
