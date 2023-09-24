/* eslint-disable @next/next/no-img-element */
import { Dropmenu } from '@components/Dropmenu';
import IconMenu from '@components/Icons/IconMenu';
import { IconRightArrow } from '@components/Icons/IconRightArrow';
import { SearchInput } from '@components/Input';
import { SelectOptions } from '@components/select';
import { SidebarProps, useGetSidebarItems } from '@features/exploration/data/sidebar';
import { useGetMenuItems } from '@features/layout/hooks';
import { layoutConfig } from '@features/layout/layout.config';
import { useCheckMobileScreen } from '@hooks';
import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { FC, useEffect, useState } from 'react';
import { MdArrowDropDown } from 'react-icons/md';

import DrawerComponent from '../Drawer';
import s from './navbar.module.css';

export interface Menu {
  title: string;
  url: string;
  submenu?: Array<Menu>;
  hashtags?: string[];
}
export interface Props {
  items?: Array<Menu>;
  includeProgressBar?: boolean;
  searchValue?: string;
  onSearchChange?: (value: string) => void;
}
export const options = [
  {
    value: 'en',
    label: 'EN',
    url_Image: '/images/us.png',
  },
  {
    value: 'vi',
    label: 'VN',
    url_Image: '/images/vn.png',
  },
];

export const NavBar: FC<Props> = ({ searchValue, onSearchChange, includeProgressBar = false }) => {
  const { t } = useTranslation(layoutConfig.i18nNamespaces);
  const { menuItems } = useGetMenuItems();

  const [selected, setSelected] = useState([]);
  const [isShowMobileMenu, setIsShowMobileMenu] = useState(false);
  const router = useRouter();
  const [progress, setProgress] = useState(0);
  const { dataExploration, dataFund } = useGetSidebarItems();
  function updateProgress() {
    const windowHeight = window.innerHeight;
    const documentHeight = document.body.scrollHeight;
    const scrolled = window.scrollY;
    const progress = (scrolled / (documentHeight - windowHeight)) * 100;

    setProgress(progress);
  }

  useEffect(() => {
    updateProgress();
    window.addEventListener('scroll', updateProgress);
    return () => {
      window.removeEventListener('scroll', updateProgress);
    };
  }, []);
  // write regex to "/categories?type=deFi" to "deFi"

  return (
    <div className={clsx('w-full left-0 bg-[#F3F3F3]  sticky top-0 z-50', s['navbar'])}>
      {/* Menu items */}
      <div className="flex relative justify-center items-center h-16">
        <div className={clsx(s['icon-menu'])} onClick={() => setIsShowMobileMenu(true)}>
          <IconMenu />
        </div>
        <div className={clsx(s['logo'])} onClick={() => router.push('/')}>
          <img className="w-[2vw] sm:w-[10vw] " src="/images/logo.png" alt="Logo" />
          <span className="text-[#074C83]  not-italic font-bold text-2xl leading-8 mr-6 ml-[14px]">Wikiblock</span>
        </div>
        {/* nav menu */}
        <div className={clsx('flex items-center', s['menus-desktop'])}>
          <div
            className={clsx(
              'relative list-none flex justify-center items-center gap-[25px] ml-[60px] text-[#050F19] menus',
            )}
          >
            <li className="group text-black ">
              <Link href="/crypto-assets?type=all">
                <a className="menu-items text-black inline-block  ">{t('navbar.crypto_assets')}</a>
              </Link>
              {/* MEGA MENU HERE */}
              {/*opacity-0 invisible  */}
              <div className={clsx('group-hover:opacity-100 group-hover:visible', s['navbar-dropdown-section'])}>
                <div className="my-[12px] w-[250px] ">
                  <ul className="dropdown flex-1   ">
                    {menuItems.map((menu: any, index: number) => {
                      return (
                        <li
                          className="group flex items-center gap-2"
                          key={index}
                          onMouseEnter={() => setSelected(menu.submenu || [])}
                        >
                          <Link href={menu.url} passHref>
                            <a
                              className={clsx('menu-items menu-sub-item text-black inline-block hover:text-[#f4ac20]', {
                                'active:menus': menu.url.includes(`${router.pathname}?type=${router.query.type}`),
                              })}
                            >
                              {menu.title}
                            </a>
                          </Link>
                          {menu.submenu ? (
                            <div className="ml-auto mr-[15px]">
                              <IconRightArrow />
                            </div>
                          ) : (
                            ''
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div className="col-levelcon my-[12px] min-w-[190px] ">
                  <ul className="dropdown flex-1 border-x-2  border-[#CACACA]  ">
                    {selected.slice(0, 9).map((item: any, index) => (
                      <li className="group " key={index}>
                        <Link href={item.url} passHref>
                          <span
                            className={clsx('menu-items menu-sub-item cursor-pointer hover:text-[#f4ac20]', {
                              isActive_Navbar: item.url === `${router.pathname}?type=${router.query.type}`,
                            })}
                          >
                            {item.title}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col-levelcon min-w-[200px] my-[12px] ">
                  <ul className="dropdown flex-1 ">
                    {selected.slice(9, selected[16] ? selected.length : selected.length - 1).map((item: any, index) => (
                      <li className="group " key={index}>
                        <Link href={item.url} passHref>
                          <span
                            className={clsx('menu-items menu-sub-item cursor-pointer hover:text-[#f4ac20]', {
                              isActive_Navbar: item.url === `${router.pathname}?type=${router.query.type}`,
                            })}
                          >
                            {item.title}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <Link href="/realtime-report">
                <a className="menu-items">{t('navbar.realtime_report')}</a>
              </Link>
            </li>
            <li className="group text-black ">
              <Link href="/fund/overview">
                <a className="menu-items">{t('navbar.fund')}</a>
              </Link>
              <div
                className={clsx(
                  'group-hover:opacity-100 group-hover:visible',
                  s['navbar-dropdown-section'],
                  s['exploration_dropdown'],
                  s['fund_dropdown'],
                )}
              >
                <div className="my-[12px] w-full px-2">
                  {dataFund.map((item: any, index: number) => (
                    <Dropmenu key={index} {...item} />
                  ))}
                </div>
              </div>
            </li>
            <li>
              <Link href="/exchange">
                <a className="menu-items">{t('navbar.exchange')}</a>
              </Link>
              <div></div>
            </li>
            <li>
              <Link href="/directory">
                <a className="menu-items">{t('navbar.directory')}</a>
              </Link>
            </li>
            <li>
              <Link href="/signals">
                <a className="menu-items">{t('navbar.signals')}</a>
              </Link>
            </li>
            <li>
              <Link href="/news">
                <a className="menu-items">{t('navbar.news')}</a>
              </Link>
            </li>
            <li>
              <Link href="/events">
                <a className="menu-items">{t('navbar.events')}</a>
              </Link>
            </li>
            <li className="group text-black ">
              <Link href="/exploration/analysis">
                <a className="menu-items text-black inline-block  ">{t('navbar.exploration')}</a>
              </Link>
              <div
                className={clsx(
                  'group-hover:opacity-100 group-hover:visible',
                  s['navbar-dropdown-section'],
                  s['exploration_dropdown'],
                )}
              >
                <div className="my-[12px] parent">
                  {dataExploration.map((item: any, index: number) => (
                    <Dropmenu key={index} {...item} />
                  ))}
                </div>
              </div>
            </li>
            <li>
              <Link href="/account">
                <a className="menu-items">{t('navbar.account')}</a>
              </Link>
            </li>
          </div>
          {/* search input */}
        </div>
        <div
          className={clsx(
            'flex justify-center items-center bg-white ml-[40px] w-[212px] h-10 mb:hidden md:mr-auto',
            s['search-desktop'],
          )}
        >
          <SearchInput value={searchValue} onChange={(e) => onSearchChange?.(e.target.value)} />
        </div>
        <DrawerComponent isShow={isShowMobileMenu} setIsShow={setIsShowMobileMenu} />
      </div>

      {includeProgressBar && (
        <div
          className={clsx('h-[5px] bg-btn-primary absolute bottom-0 left-0 transition-all duration-300')}
          style={{ width: `${progress}%` }}
        ></div>
      )}
    </div>
  );
};

export default NavBar;
