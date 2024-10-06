/**
 * Layout of the javascript module
 * This layout wraps the content of the page within tabs ( passed as props )
 */

// dependencies
import React, { ReactNode } from "react";

// components
import { TabNavigation } from "@/app/components";

// data
import { tabs } from "./data";

type Props = {
  children: ReactNode;
};

const JavaScriptLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="px-0 sm:px-10 lg:px-20 2xl:px-40">
      <TabNavigation data={tabs}>{children}</TabNavigation>
    </div>
  );
};

export default JavaScriptLayout;
