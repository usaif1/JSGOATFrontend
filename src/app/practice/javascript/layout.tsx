import Link from "next/link";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const JavaScriptLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="px-0 sm:px-10 lg:px-20 2xl:px-40">
      <ul className="bg-green-900 w-4/12 flex items-center text-white justify-between">
        <Link href={"/practice/javascript/mcq"}>MCQ</Link>
        <Link href={"/practice/javascript/conceptual"}>Conceptual</Link>
        <Link href={"/practice/javascript/coding"}>Coding exercises</Link>
      </ul>
      <div className="bg-red-100">{children}</div>
    </div>
  );
};

export default JavaScriptLayout;
