import DefaultLayout from "@features/layout/components/DefaultLayout";

import Overview from "../components/Overview";
import { useGetSidebarItems } from "../data/sidebar";


const FundPage = () => {
  const { dataFund } = useGetSidebarItems();
  return (
    <DefaultLayout withSidebar dataSidebar={dataFund as any}>
      <Overview />
    </DefaultLayout>
  );
};

export default FundPage;
