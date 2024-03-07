export type BoxAS = "div" | "span" | "aside" | "main" | "header" | "section" | "footer" | "nav" | "ul" | "li";

// FlexBox
export type Align = "center" | "flex-start" | "flex-end" | "baseline" | "stretch";
export type Direction = "row" | "row-reverse" | "column" | "column-reverse";
export type Justify = "center" | "flex-start" | "flex-end" | "space-between" | "space-around" | "space-evenly";
export type Wrap = "wrap" | "wrap-reverse" | "nowrap";
export type Flex = "flex" | "inline-flex";

// divider
export type DividerVariant = "fullbleed" | "inset";

// color
export type ColorVariant = "50" | "100" | "200" | "300" | "400" | "500" | "550" | "600" | "700" | "800" | "900";

// Button
export type ButtonVariants = "primary" | "info" | "success" | "warning" | "danger" | "gray" | "plain" | "secondary";
export type ButtonTypes = "solid" | "outlined" | "ghost";
export type ButtonStates = "default" | "hovered" | "focused" | "clicked" | "disabled";
export type ButtonDisplays = "inline" | "block";
export interface ButtonIconStyles {
  left: string;
  right: string;
}

// icon
export type IconVariant = "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl";

// image
export type ImageVariant = "contain" | "cover" | "fill" | "none" | "scaleDown";
