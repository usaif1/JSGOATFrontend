// dependencies
import React, { ReactNode } from "react";

// types
import {
  TextColor,
  TextColors,
  TextSize,
  TextSizes,
  TextWeight,
  TextWeights,
} from "./types";

type Props = {
  size?: TextSize;
  color?: TextColor;
  colorDark?: TextColor;
  children: ReactNode;
  weight?: TextWeight;
};

const Text: React.FC<
  Props &
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLParagraphElement>,
      HTMLParagraphElement
    >
> = ({
  size = "base",
  color = "primary-light",
  colorDark = "primary-dark",
  weight = "normal",
  ...props
}) => {
  const darkTextClass = `dark:${
    TextColors[colorDark] || TextColors["primary-dark"]
  }`;

  return (
    <p
      {...props}
      className={`${TextSizes[size]} ${TextColors[color]} ${TextWeights[weight]} ${darkTextClass}`}
    >
      {props.children}
    </p>
  );
};

export default Text;
