import { useGetSidebarItems } from "@features/exploration/data/sidebar";
import DefaultLayout from "@features/layout/components/DefaultLayout";

import Experience from "../components/Portal/Experience";


const ExperiencePage = (
) => {
  const { dataExploration } = useGetSidebarItems();
  return (
    <DefaultLayout withSidebar dataSidebar={dataExploration as any}>
      <Experience />
    </DefaultLayout>
  );

};

export default ExperiencePage;
