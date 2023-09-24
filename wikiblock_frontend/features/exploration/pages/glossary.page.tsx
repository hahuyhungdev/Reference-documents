import { useGetSidebarItems } from "@features/exploration/data/sidebar";
import DefaultLayout from "@features/layout/components/DefaultLayout";

import Glossary from "../components/ForNewbies/Glossary";


const GlossaryPage = (
) => {
  const { dataExploration } = useGetSidebarItems();
  return (
    <DefaultLayout withSidebar dataSidebar={dataExploration as any}>
      <div>
        <Glossary />
      </div>
    </DefaultLayout>
  );

};

export default GlossaryPage;
