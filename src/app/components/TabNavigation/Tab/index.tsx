/**
 * Tab component renders an individual tab link.
 * It highlights the active tab based on the current path (pathname).
 *
 * @param {Props} props - Component properties
 * @param {Object} props.tabData - Data for each tab, including link and title
 * @param {string} props.tabData.link - The URL path the tab links to
 * @param {string} props.tabData.title - The display title of the tab
 * @returns {JSX.Element} - The rendered Tab component
 */

"use client";

// dependencies
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// components
import Text from "../../Text";

type Props = {
  tabData: {
    link: string; // The URL the tab should link to
    title: string; // The display title of the tab
  };
};

const Tab: React.FC<Props> = ({ tabData }) => {
  const pathname = usePathname();

  return (
    <Link
      id="tab"
      href={tabData.link}
      className={`px-3 pt-1 pb-1 ${
        pathname.includes(tabData.link)
          ? `border-b-2 -mb-0.5 border-b-color-bg-primary-light dark:border-b-color-bg-primary-dark 
          border-x border-x-color-border-primary-light dark:border-x-color-border-primary-dark 
          border-t border-t-color-border-primary-light dark:border-t-color-border-primary-dark 
          rounded-tr-md rounded-tl-md`
          : ""
      }`}
    >
      <Text>{tabData?.title}</Text>
    </Link>
  );
};

export default Tab;
