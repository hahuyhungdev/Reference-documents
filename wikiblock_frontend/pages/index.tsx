// import customStaticProps from '@utils/staticProps';

import { homeConfig } from "@features/home/home.config";
import { HomePage } from "@features/home/pages/home.page";
import customStaticProps from "@utils/staticProps";

export default function Home() {
  return <HomePage />;
}

export const getStaticProps = customStaticProps(
  null,
  homeConfig.i18nNamespaces.slice()
);
