import { useGetSidebarItems } from "@features/exploration/data/sidebar";
import DefaultLayout from "@features/layout/components/DefaultLayout";

import Academy from "../components/Portal/Academy";

const AcademyPage = (
) => {
  const { dataExploration } = useGetSidebarItems();
  return (
    <DefaultLayout withSidebar dataSidebar={dataExploration as any}>
      <div className="">
        <Academy />
      </div>
    </DefaultLayout>
  );

};

export default AcademyPage;
