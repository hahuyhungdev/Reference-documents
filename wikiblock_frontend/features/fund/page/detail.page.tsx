import DefaultLayout from '@features/layout/components/DefaultLayout';
import React, { FC, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import { Detail } from '../components/Detail';
import { Firms } from '../components/Detail/Firms';
import { Overview } from '../components/Detail/Overview/Overview';
import { Portfolio } from '../components/Detail/Portfolio';
import { RecentTweets } from '../components/Detail/RecentTweets';
import { SimilarCompany } from '../components/Detail/SimilarCompany';
import { Team } from '../components/Detail/Team';
import { Wallet } from '../components/Detail/Wallet';
import { Fund } from '../fund.type';

export const SidebarContext = React.createContext({ selected: null as any });
const DetailPage: FC<any> = ({ fund }: { fund?: Fund | undefined }) => {
  const [selected, setSelected] = useState<
    'overview' | 'portfolio' | 'wallet-activity' | 'team' | 'similar-company' | 'recent-tweets' | 'firms'
  >('overview');
  const { ref: overview, inView: overviewElementIsVisible } = useInView({
    // threshold: 0.7,
  });
  const { ref: portfolio, inView: portfolioElementIsVisible } = useInView({
    // threshold: 0.2,
  });
  const { ref: wallet_activity, inView: walletActivityElementIsVisible } = useInView({
    // threshold: 0.7,
  });
  const { ref: team, inView: teamSignalsElementIsVisible } = useInView();

  const { ref: firms, inView: firmsSignalsElementIsVisible } = useInView();

  const { ref: similar_company, inView: similarCompanyElementIsVisible } = useInView({
    // threshold: 0.7,
  });
  const { ref: recent_tweets, inView: recentTweetsElementIsVisible } = useInView({
    // threshold: 0.7,
  });

  useEffect(() => {
    return setSelected(
      (overviewElementIsVisible && 'overview') ||
      (portfolioElementIsVisible && 'portfolio') ||
      (walletActivityElementIsVisible && 'wallet-activity') ||
      (teamSignalsElementIsVisible && 'team') ||
      (similarCompanyElementIsVisible && 'similar-company') ||
      (recentTweetsElementIsVisible && 'recent-tweets') ||
      (firmsSignalsElementIsVisible && 'firms') ||
      'overview',
    );
  }, [
    overviewElementIsVisible,
    portfolioElementIsVisible,
    walletActivityElementIsVisible,
    teamSignalsElementIsVisible,
    firmsSignalsElementIsVisible,
    similarCompanyElementIsVisible,
    recentTweetsElementIsVisible,
  ]);

  return (
    <DefaultLayout>
      <SidebarContext.Provider value={{ selected }}>
        <Detail fund={fund}>
          <div ref={overview} id="overview">
            <Overview fund={fund as Fund} />
          </div>
          <div ref={portfolio} id="portfolio">
            <Portfolio fund={fund as Fund} />
          </div>
          <div ref={wallet_activity} id="wallet-activity">
            <Wallet />
          </div>
          <div ref={team} id="team">
            <Team fund={fund as Fund} />
          </div>
          <div ref={firms} id="firms">
            <Firms fund={fund as Fund} />
          </div>
          <div ref={similar_company} id="similar-company">
            <SimilarCompany />
          </div>
          <div ref={recent_tweets} id="recent-tweets">
            <RecentTweets />
          </div>
        </Detail>
      </SidebarContext.Provider>
    </DefaultLayout>
  );
};

export default DetailPage;
