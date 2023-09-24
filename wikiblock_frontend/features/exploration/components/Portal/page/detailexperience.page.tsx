import { useGetSidebarItems } from "@features/exploration/data/sidebar";
import DefaultLayout from "@features/layout/components/DefaultLayout";

import { DetailExperience } from "../Experience/DetailExperience";

const DetailExperiencePage = (
) => {
  const { dataExploration } = useGetSidebarItems();
  return (
    <DefaultLayout withSidebar dataSidebar={dataExploration as any}>
      <div className="">
        <DetailExperience />
      </div>
    </DefaultLayout>
  );

};

export default DetailExperiencePage;
