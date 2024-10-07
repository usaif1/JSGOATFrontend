/**
 * ScrollToTopButton Component
 *
 * A floating button that appears after the user has scrolled 200px down the page.
 * When clicked, the button scrolls the page back to the top smoothly.
 */

// dependencies
"use client";

import React, { useState, useEffect, useCallback } from "react";
import { FaArrowUp } from "react-icons/fa";
import { throttle } from "lodash";

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  /**
   * handleScroll
   *
   * Function to check the scroll position and update the visibility of the button.
   * Throttled to improve performance.
   */
  const handleScroll = useCallback(() => {
    throttle(() => {
      const scrollTop = window.scrollY;
      setIsVisible(scrollTop > 200);
    }, 500)();
  }, []);

  // Scroll to top functionality
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Adding event listener on component mount and cleanup on unmount
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <div id="scroll_to_top_container">
      <button
        id="scroll_to_top_button"
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 bg-color-highlight-secondary hover:bg-color-highlight-primary text-white p-4 rounded-full shadow-lg transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <FaArrowUp size={22} />
      </button>
    </div>
  );
};

export default ScrollToTopButton;
