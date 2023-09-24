import { useGetAllCategoriesMutation } from "@features/events/event.service";
import { useGetCategoryByIdMutation } from "@features/events/event.service";
import { Category } from "@features/events/events.type";
import { useGetSidebarItems } from "@features/exploration/data/sidebar";
import DefaultLayout from "@features/layout/components/DefaultLayout";
import { Menu } from "@features/layout/layout.type";
import { useEffect, useState } from "react";

import HowToCrypto from "../components/ForNewbies/howToCrypto/overview";
import { getCategoryMenu } from "./exploration.page";



const TYPE_CATEGORY = "exploration";
const RANK_FILTER = 0;

const HowToCryptoPage = (
) => {
  const [categoriesMenu, setCategoriesMenu] = useState<Array<Menu>>([]);
  const [getAllCategories, { data: allCategoriesData }] =
    useGetAllCategoriesMutation();
  const [getCategoryById, { data: { sub_categories } = {
    sub_categories: [],
  } }] = useGetCategoryByIdMutation();

  useEffect(() => {
    getCategoryById({
      id: "how_to_crypto",
    });
  }, []);
  useEffect(() => {
    getAllCategories({ type: TYPE_CATEGORY, rank: RANK_FILTER });
  }, []);
  useEffect(() => {
    if (allCategoriesData) {
      const categoriesMenu = getCategoryMenu(allCategoriesData.items);
      setCategoriesMenu(categoriesMenu);
    }
  }, [allCategoriesData]);
  console.log(sub_categories)
  // console.log(allCategoriesData);
  return (
    <DefaultLayout withSidebar dataSidebar={categoriesMenu as any}>
      <div className="">
        <HowToCrypto categoriesList={sub_categories} />
      </div>
    </DefaultLayout>
  );
};

export default HowToCryptoPage;
