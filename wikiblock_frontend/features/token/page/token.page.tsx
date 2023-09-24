import DefaultLayout from '@features/layout/components/DefaultLayout';
import { useRouter } from 'next/router';
import { FC, useEffect, useRef, useState } from 'react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { InViewHookResponse, useInView } from 'react-intersection-observer';

import { Token } from '..';
import { Analytis } from '../Analytis';
import { BuyUse } from '../BuyUse';
import { Compare } from '../Compare';
import { NetworkSignals } from '../NetworkSignals';
import { Profile } from '../Profile/Profile';
import { tokenConfig } from '../token.config';
import { UniMarketStats } from '../UniMarketStats/UniMarketStats';

interface Props {}
export const SidebarContext = React.createContext({ selected: null as any });
const AllTokenPage: FC<Props> = () => {
  const [selected, setSelected] = useState<
    'overview' | 'profile' | 'anylytis' | 'networkSignals' | 'compare' | 'howtobuy'
  >('overview');

  const { ref: uni, inView: uniElementIsVisible } = useInView({
    // threshold: 0.7,
  });
  const { ref: profile, inView: profileElementIsVisible } = useInView({
    // threshold: 0.2,
  });
  const { ref: anylytis, inView: anylytisElementIsVisible } = useInView({
    // threshold: 0.7,
  });
  const { ref: networkSignals, inView: networkSignalsElementIsVisible } = useInView();

  const { ref: compare, inView: compareElementIsVisible } = useInView({
    // threshold: 0.7,
  });
  const { ref: howtobuy, inView: howtobuyElementIsVisible } = useInView({
    // threshold: 0.7,
  });

  useEffect(() => {
    if (uniElementIsVisible) {
      setSelected('overview');
    } else if (profileElementIsVisible) {
      setSelected('profile');
    } else if (anylytisElementIsVisible) {
      setSelected('anylytis');
    } else if (networkSignalsElementIsVisible) {
      setSelected('networkSignals');
    } else if (compareElementIsVisible) {
      setSelected('compare');
    } else if (howtobuyElementIsVisible) {
      setSelected('howtobuy');
    }
  }, [
    uniElementIsVisible,
    profileElementIsVisible,
    anylytisElementIsVisible,
    networkSignalsElementIsVisible,
    compareElementIsVisible,
    howtobuyElementIsVisible,
  ]);

  return (
    <DefaultLayout>
      <SidebarContext.Provider value={{ selected }}>
        <Token>
          <div ref={uni} id="overview">
            <UniMarketStats />
          </div>
          <div ref={profile} id="profile">
            <Profile />
          </div>
          <div ref={anylytis} id="anylytis">
            <Analytis />
          </div>
          <div ref={networkSignals} id="networkSignals">
            <NetworkSignals />
          </div>
          <div ref={compare} id="compare">
            <Compare />
          </div>
          <div ref={howtobuy} id="howtobuy">
            <BuyUse />
          </div>
        </Token>
      </SidebarContext.Provider>
    </DefaultLayout>
  );
};

export default AllTokenPage;
