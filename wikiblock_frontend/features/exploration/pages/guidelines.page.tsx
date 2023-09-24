import { useGetSidebarItems } from "@features/exploration/data/sidebar";
import DefaultLayout from "@features/layout/components/DefaultLayout";

import Guidelines from "../components/Portal/Guidelines";

const GuidelinesPage = (
) => {
  const { dataExploration } = useGetSidebarItems();
  return (
    <DefaultLayout withSidebar dataSidebar={dataExploration as any}>
      <div className="">
        <Guidelines />
      </div>
    </DefaultLayout>
  );

};

export default GuidelinesPage;
