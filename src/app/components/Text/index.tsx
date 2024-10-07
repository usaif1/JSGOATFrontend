// dependencies
import React, { ReactNode } from "react";

// types
import { TextSize, TextSizes, TextWeight, TextWeights } from "./types";

type Props = {
  /**
   * Defines the size of the text.
   * Defaults to "base", and can be one of the sizes defined in the `TextSizes` enum.
   */
  size?: TextSize;

  /**
   * Defines the content of the text.
   * It can be any valid React node (string, element, etc.).
   */
  children: ReactNode;

  /**
   * Defines the weight of the text (e.g., "normal", "bold").
   * Defaults to "normal", and can be one of the weights defined in the `TextWeights` enum.
   */
  weight?: TextWeight;
};

/**
 * Text component for rendering customizable text elements.
 *
 * This component supports text size, weight, and dynamic color change based on the current theme.
 * It uses Tailwind CSS utility classes for styling and supports dark mode using the `dark:` class.
 *
 * @param {Props} props - The props object containing component properties.
 * @returns {JSX.Element} A paragraph element with customizable styles.
 */
const Text: React.FC<
  Props &
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLParagraphElement>,
      HTMLParagraphElement
    >
> = ({ size = "base", weight = "normal", ...props }) => {
  return (
    <p
      id="text"
      {...props}
      className={`${TextSizes[size]} ${TextWeights[weight]} text-color-text-primary-light dark:text-color-text-primary-dark`}
    >
      {props.children}
    </p>
  );
};

export default Text;
