import { fundConfig } from '@features/fund/fund.config';
import DetailPage from '@features/fund/page/detail.page';
import FundPage from '@features/fund/page/fund.page';
import customStaticProps from '@utils/staticProps';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { useGetFundBySlugMutation } from '../../../features/fund/fund.service';

const Detail = () => {
  const [getFundBySlug, { data: fund }] = useGetFundBySlugMutation() as any;
  const router = useRouter();
  const {
    query: { slug },
  } = router;
  console.log({
    slug,
  });
  useEffect(() => {
    getFundBySlug({ slug });
    console.log(fund);
  }, []);
  useEffect(() => {
    console.log({
      fund,
    });
  }, [fund]);
  return <DetailPage fund={fund} />;
};

export default Detail;

export const getStaticProps = customStaticProps(null, fundConfig.i18nNamespaces.slice());
export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking', // can also be true or 'blocking'
  };
};
