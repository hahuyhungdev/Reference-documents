import { categoriesConfig } from "@features/categories/categories.config";
import CategoriesPage from "@features/categories/pages/categories.page";
import customStaticProps from "@utils/staticProps";
import React from "react";

const Sectors = () => {
  return <CategoriesPage />;
};

export default Sectors;

export const getStaticProps = customStaticProps(
  null,
  categoriesConfig.i18nNamespaces.slice()
);
