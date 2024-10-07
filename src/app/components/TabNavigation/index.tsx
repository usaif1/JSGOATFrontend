/**
 * TabNavigation component that renders a list of tabs with navigation links.
 * Serves as the primary navigation for types of questions ( MCQ, Conceptual, Coding )
 * This component uses react-tabs and renders a list of tabs with links, as well as corresponding tab panels.
 * Each tab is linked to a route provided by the `tabs` array.
 * @param {Props} props - Component properties
 * @param {TabNavigationData} props.data - The link tab to render within each Tab
 * @param {ReactNode} props.children - The content to render within each TabPanel
 * @returns {ReactElement} - The rendered TabNavigation component.
 *
 * might need to implement custom tabs
 */

// dependencies
import React, { ReactNode } from "react";

// components
// import Text from "../Text";
import ScrollToTop from "../ScrollToTop";
import Tab from "./Tab";

type TabNavigationData = {
  link: string;
  title: string;
};

type Props = {
  children: ReactNode;
  tabs: TabNavigationData[];
  activeTab?: number;
};

const TabNavigation: React.FC<Props> = ({ children, tabs }) => {
  return (
    <>
      <nav>
        <ul className="flex items-center gap-x-8 border-b border-color-border-primary-light dark:border-color-border-primary-dark">
          {tabs.map((tab) => {
            return <Tab key={tab.title} tabData={tab} />;
          })}
        </ul>
      </nav>
      <div className="pt-4">{children}</div>
      <ScrollToTop />
    </>
  );
};

export default TabNavigation;
