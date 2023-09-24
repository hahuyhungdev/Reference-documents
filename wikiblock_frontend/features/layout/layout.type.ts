export type Menu = {
  title: string;
  url?: string;
  icon?: JSX.Element;
  children?: Array<Menu>;
  value?: string;
};
