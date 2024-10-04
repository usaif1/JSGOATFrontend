import { NavbarPrimary } from "@/app/components";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Practice: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <NavbarPrimary />
      <div className="min-h-screen px-4 pt-14 sm:pl-64 sm:pt-10">
        {children}
      </div>
    </div>
  );
};

export default Practice;
