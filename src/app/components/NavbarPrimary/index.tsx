/**
 * left aligned navbar containing links to different resources
 * sticky left aligned for desktop
 * reduces to drawer in mobile mode with a hamburger menu on top left
 */

"use client";

// dependencies
import React, { useState } from "react";
import Drawer from "react-modern-drawer";
import { IoMenu } from "react-icons/io5";

// components
import Anchor from "./NavbarAnchor";

// data
import { links } from "./data";

const NavbarPrimary: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <nav className="hidden sm:block sm:w-60 sm:sticky sm:left-0 sm:top-0 h-screen bg-color-bg-secondary-light dark:bg-color-bg-secondary-dark px-4 pt-10">
        <ul className="flex flex-col gap-y-4">
          {links.map((link) => {
            return (
              <li key={link.title}>
                <Anchor link={link.link} title={link.title} Icon={link.icon} />
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="sm:hidden">
        <button
          className="text-white fixed left-4 top-4"
          onClick={toggleDrawer}
        >
          <IoMenu size={24} />
        </button>
        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction="left"
          className="bg-color-bg-secondary-light dark:bg-color-bg-secondary-dark px-4 pt-10"
        >
          <ul className="flex flex-col gap-y-4">
            {links.map((link) => {
              return (
                <li key={link.title}>
                  <Anchor
                    link={link.link}
                    title={link.title}
                    Icon={link.icon}
                  />
                </li>
              );
            })}
          </ul>
        </Drawer>
      </div>
    </>
  );
};

export default NavbarPrimary;
