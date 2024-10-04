/**
 * Anchor component to render links for navbar
 * Renders the <Link /> component from next/link along with an icon
 */
"use client";

// dependencies
import React from "react";
import Link from "next/link";
import { IconType } from "react-icons";
import { usePathname } from "next/navigation";

// components
import Text from "../../Text";

type Props = {
  link: string;
  title: string;
  Icon: IconType;
};

const Anchor: React.FC<Props> = ({ link, title, Icon }) => {
  const pathName = usePathname();

  return (
    <Link
      href={link}
      className={`w-full text-color-text-primary-light dark:text-color-text-primary-dark rounded-md py-1.5 px-2 hover:bg-color-highlight-secondary flex items-center gap-x-4
        ${pathName === link ? "bg-color-highlight-primary" : ""}
        `}
    >
      <Icon />
      <Text weight="semibold">{title}</Text>
    </Link>
  );
};

export default Anchor;
