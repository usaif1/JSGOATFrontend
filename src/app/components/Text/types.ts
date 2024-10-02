// text size
export enum TextSizes {
  "xs" = "text-xs",
  "sm" = "text-sm",
  "base" = "text-base",
  "lg" = "text-lg",
  "xl" = "text-xl",
  "2xl" = "text-2xl",
}

export type TextSize = keyof typeof TextSizes;

// text color
export enum TextColors {
  "primary-dark" = "text-color-text-primary-dark",
  "primary-light" = "text-color-text-primary-light",
}

export type TextColor = keyof typeof TextColors;

// text weight
export enum TextWeights {
  "thin" = "font-thin",
  "extralight" = "font-extralight",
  "light" = "font-light",
  "normal" = "font-normal",
  "medium" = "font-medium",
  "semibold" = "font-semibold",
  "bold" = "font-bold",
  "extrabold" = "font-extrabold",
  "black" = "font-black",
}

export type TextWeight = keyof typeof TextWeights;
