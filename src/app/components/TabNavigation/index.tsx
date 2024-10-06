/**
 * TabNavigation component that renders a list of tabs with navigation links.
 * Serves as the primary navigation for types of questions ( MCQ, Conceptual, Coding )
 * This component uses react-tabs and renders a list of tabs with links, as well as corresponding tab panels.
 * Each tab is linked to a route provided by the `tabs` array.
 * @param {Props} props - Component properties
 * @param {TabNavigationData} props.data - The link tab to render within each Tab
 * @param {ReactNode} props.children - The content to render within each TabPanel
 * @returns {ReactElement} - The rendered TabNavigation component.
 */

"use client";

// dependencies
import React, { ReactNode } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Link from "next/link";

// components
import Text from "../Text";

// data
import { tabs } from "../../practice/javascript/data";

type TabNavigationData = {
  link: string;
  title: string;
};

type Props = {
  children: ReactNode;
  data: TabNavigationData[];
};

const TabNavigation: React.FC<Props> = ({ children }) => {
  return (
    <Tabs className="cursor-pointer">
      <TabList>
        {tabs.map((tab) => {
          return (
            <Tab
              key={tab.title}
              selectedClassName="bg-color-bg-primary-light dark:bg-color-bg-primary-dark !border !border-color-border-primary-light dark:!border-color-border-primary-dark rounded-tl-md rounded-tr-md"
            >
              <Link href={tab.link}>
                <Text>{tab.title}</Text>
              </Link>
            </Tab>
          );
        })}
      </TabList>
      {tabs.map((tab) => {
        return <TabPanel key={tab.title}>{children}</TabPanel>;
      })}
    </Tabs>
  );
};

export default TabNavigation;
