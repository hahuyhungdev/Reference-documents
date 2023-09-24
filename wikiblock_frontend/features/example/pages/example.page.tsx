import DefaultLayout from "@features/layout/components/DefaultLayout";
import { FC } from "react";

// import { MyAccount } from '../components/myAccount';

export const OverviewPage: FC = () => {
  return <DefaultLayout headProps={{ seoTitle: "Company" }}></DefaultLayout>;
};
