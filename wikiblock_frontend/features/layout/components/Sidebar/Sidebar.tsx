import { Button } from '@components/Button/Button';
import { IconCloseSideBar, IconRightTwoArrow } from '@components/Icons';
import CreatChartDesktop from '@features/fund/components/CreatChart/CreatChartDesktop';
import ChartFilterDrawer from '@features/fund/components/CreatChart/CreatChartDrawer';
import { Menu } from '@features/layout/layout.type';
import { useCheckMobileScreen } from '@hooks';
import clsx from 'clsx';
import Link from 'next/link';
import router, { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';
import { AiOutlineSetting } from 'react-icons/ai';

import s from './sidebar.module.css';
interface SidebarItemProps {
  menu: Menu;
  onClick?: () => void;
}
export type SidebarProps = {
  className?: string;
  url?: string;
  title: string;
};
const Component_side: FC<SidebarProps> = ({ className, url, title }) => {
  const [isShowFilter, setIsShowFilter] = useState(false);
  const [highlightIcon, setHighlightIcon] = useState(false);
  const router = useRouter();
  const { windowDimensions } = useCheckMobileScreen();
  // console.log(router.query != undefined ? true : false)
  return (
    <div
      className={clsx(
        'my-[16px] cursor-pointer hover:text-[#f4ac20] text-[13px] text-[#575656] font-medium',
        {
          isActive_Navbar:
            url === router.route ||
            url?.includes(
              (router.query.subcategory as string) || (router.query.category as string) || (router.asPath as string),
            ),
        },
        { 'font-bold': url?.includes('/fund/analysis/create-chart') },
      )}
    >
      {!url?.includes('/fund/analysis/create-chart') ? (
        <Link href={url as string} passHref>
          <span className="transition-all flex gap-x-2 items-center">{title}</span>
        </Link>
      ) : (
        <>
          <span onClick={() => setIsShowFilter(true)} className="transition-all flex gap-x-2 items-center">
            {title}
            {url?.includes('/fund/analysis/create-chart') && (
              <div className="newchart">
                <div className={clsx('h-full px-[12px] py-[6px] text-black transition-all')}>
                  <div className="w-full flex items-center gap-x-[15px]">
                    <div>
                      <AiOutlineSetting />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </span>
          <span>
            {url?.includes('/fund/analysis/create-chart') && (
              <div className="newchart">
                {windowDimensions.width >= 1023 ? (
                  <CreatChartDesktop
                    show={isShowFilter}
                    onClose={() => {
                      setIsShowFilter(false);
                    }}
                  />
                ) : (
                  <ChartFilterDrawer
                    show={isShowFilter}
                    onClose={() => {
                      setIsShowFilter(false);
                    }}
                  />
                )}
              </div>
            )}
          </span>
        </>
      )}
    </div>
  );
};
export const SidebarItem: FC<SidebarItemProps> = ({ menu, onClick }) => {
  const router = useRouter();
  const [isShowCollapse, setIsShowCollapse] = useState(false);

  useEffect(() => {
    if (router.query) {
      const category = (router.query.category as string) || (router.query.type as string);
      const regrex = new RegExp(`${category}$`, 'i');
      if (menu.children) {
        const active = menu.children.find((item) => regrex.test(item.url as string));
        setIsShowCollapse(active ? true : false);
      }
    }
  }, [router.query, menu]);

  if (!menu.children) {
    return (
      <div
        className={clsx(
          'px-[10px] py-[9px] flex items-center  text-[#4D4D4D] text-[14px] font-medium cursor-pointer hover:bg-[#4992D6] transition-all hover:text-white',
          {
            isActive_Sidebar: menu.url?.includes((router.query.category as string) || router.pathname),
            'bg-[#E5E7EE]': !menu.url?.includes(router.query.category as string),
            'button-nav': router.pathname.includes('experience/[category]/[slug]'),
          },
        )}
      >
        {router.pathname.includes('/fund/overview') && menu.title === 'Overview' && (
          <Button className="border-0 bg-[#E5E7EE] active:bg-[#E5E7EE] mr-1" onClick={onClick}>
            <IconCloseSideBar />
          </Button>
        )}
        <Link href={menu?.url as string} passHref>
          <span>{menu.title}</span>
        </Link>
        {menu.icon && menu.icon}
      </div>
    );
  } else {
    return (
      <div className="">
        <div
          className={clsx(
            'px-[10px] py-[9px] bg-[#E5E7EE] text-[#4D4D4D] text-[14px] font-medium cursor-pointer hover:bg-[#4992D6] hover:text-white flex items-center justify-between',
            {
              isActive_Sidebar: isShowCollapse,
              'button-nav': router.pathname.includes('experience/[category]/[slug]'),
            },
          )}
          onClick={() => setIsShowCollapse((prev) => !prev)}
        >
          <span>{menu.title}</span>
          <div
            className={clsx('transition-all duration-300', {
              'rotate-90': isShowCollapse,
            })}
          >
            {router.pathname.includes('experience/[category]/[slug]') ? null : (
              <IconRightTwoArrow fill={!isShowCollapse ? '#000' : '#fff'} />
            )}
          </div>
        </div>
        <div
          className={clsx('px-[15px] transition-all h-auto ease-linear duration-300 overflow-hidden overflow-y-auto', {
            'max-h-0': !isShowCollapse,
            'max-h-[600px]': isShowCollapse,
          })}
        >
          {menu.children.map((child, index) => {
            return <Component_side key={index} {...child} />;
          })}
        </div>
      </div>
    );
  }
};
type typeSidebar = {
  dataSidebar: Array<Menu>;
  onClick?: () => void;
};
export const Sidebar: FC<typeSidebar> = ({ dataSidebar, onClick }) => {
  return (
    <div
      className={clsx(
        'sticky top-[5.2rem] z-[10] min-w-[208px] bg-white h-fit overflow-hidden mt-[25px] md:py-[10px] px-[16px]',
        { 'contain-isNavigation': router.pathname.includes('experience/[category]/[slug]') },
      )}
    >
      <div
        className={clsx('Navigation', s['sidebar'], {
          isNavigation: router.pathname.includes('experience/[category]/[slug]'),
        })}
      >
        {dataSidebar.map((menu, index) => (
          <SidebarItem key={index} menu={menu} onClick={onClick} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
