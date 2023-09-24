import { useGetSidebarItems } from "@features/exploration/data/sidebar";
import DefaultLayout from "@features/layout/components/DefaultLayout";

import Articles from "../components/ForNewbies/howToCrypto/articles";


const ArticlesPage = (
) => {
  const { dataExploration } = useGetSidebarItems();
  return (
    <DefaultLayout withSidebar dataSidebar={dataExploration as any}>
      <div>
        <Articles />
      </div>
    </DefaultLayout>
  );
};

export default ArticlesPage;
