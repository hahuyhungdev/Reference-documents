import { useGetSidebarItems } from "@features/exploration/data/sidebar";
import DefaultLayout from "@features/layout/components/DefaultLayout";

import { Glossary } from "../Glossary";

const GlossaryPage = (
) => {
  const { dataExploration } = useGetSidebarItems();
  return (
    <DefaultLayout withSidebar dataSidebar={dataExploration as any}>
      <div className="">
        <Glossary />
      </div>
    </DefaultLayout>
  );

};

export default GlossaryPage;
