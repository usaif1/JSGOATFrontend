/**
 * Layout of the javascript module
 * This layout wraps the content of the page within tabs ( passed as props )
 */

"use client";

// dependencies
import React, { ReactNode } from "react";

// components
import { TabNavigation } from "@/app/components";

// data
import { tabs } from "./data";
import { usePathname } from "next/navigation";

type Props = {
  children: ReactNode;
};

const JavaScriptLayout: React.FC<Props> = ({ children }) => {
  const pathname = usePathname();

  const activeTab = tabs.findIndex((tab) => {
    return pathname.includes(tab.link);
  });

  return (
    <div className="px-0 sm:px-10 lg:px-20 2xl:px-40">
      <TabNavigation activeTab={activeTab} tabs={tabs}>
        {children}
      </TabNavigation>
    </div>
  );
};

export default JavaScriptLayout;
