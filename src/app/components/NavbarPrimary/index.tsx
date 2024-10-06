/**
 * A drawer component to handle navigation
 * is persistent on desktop
 * is closable on mobile and tablets ( menu button visible )
 */

"use client";

// dependencies
import React, { useState, useEffect } from "react";
import Drawer from "react-modern-drawer";
import { IoMenu } from "react-icons/io5";

// components
import Anchor from "./NavbarAnchor";

// data
import { links } from "./data";

const NavbarPrimary: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  // Handle resizing to check if the screen is mobile/tablet
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640); // Define tablet/mobile breakpoint
      if (window.innerWidth <= 640) {
        setIsOpen(false);
      }
    };

    handleResize(); // Check on initial load
    window.addEventListener("resize", handleResize); // Add resize event listener

    return () => {
      window.removeEventListener("resize", handleResize); // Clean up listener on unmount
    };
  }, []);

  return (
    <nav>
      {/* Hamburger menu for mobile/tablet only */}
      {isMobile && (
        <div className="w-full bg-color-bg-primary-light dark:bg-color-bg-primary-dark fixed left-0 top-0 z-50 px-4 py-2 border border-white">
          <button className="text-white" onClick={toggleDrawer}>
            <IoMenu size={24} />
          </button>
        </div>
      )}

      {/* Persistent drawer for desktop and closable drawer for mobile */}
      <Drawer
        enableOverlay={isMobile} // Show overlay on mobile
        open={isOpen || !isMobile} // Always open on desktop, toggle on mobile
        onClose={toggleDrawer}
        direction="left"
        className={`bg-color-bg-secondary-light dark:bg-color-bg-secondary-dark px-4 pt-10`}
      >
        <ul className="flex flex-col gap-y-4 cursor-pointer">
          {links.map((link) => {
            return (
              <li key={link.title}>
                <Anchor link={link.link} title={link.title} Icon={link.icon} />
              </li>
            );
          })}
        </ul>
      </Drawer>
    </nav>
  );
};

export default NavbarPrimary;
