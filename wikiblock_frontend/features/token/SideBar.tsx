import clsx from "clsx";

export type Prop = {
  title?: string;
  icons?: JSX.Element[];
  description?: string;
  color?: string;
};
const mySidebar = [
  {
    title: "Overview",
  },
  {
    title: "Profile",
    color_bg: "#D9D9D9",
  },
  {
    title: "Project Analytis",
  },
  {
    title: "Network & Signal",
  },
  {
    title: "How to buy/use",
  },
  {
    title: "Rating & Review",
  },
];

export const SideBar = () => {
  return (
    <div className="w-1/5 px-2.5">
      {mySidebar.map((item, index) => {
        return (
          <li
            key={index}
            className={clsx(
              "flex border-[1px] border-[#E5E7EE] items-center p-2"
            )}
          >
            <a className="text-[#4D4D4D]">
              <span>{item.title}</span>
            </a>
          </li>
        );
      })}
    </div>
  );
};
