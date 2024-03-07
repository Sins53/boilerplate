export type ColorVariant = "50" | "100" | "200" | "300" | "400" | "500" | "550" | "600" | "700" | "800" | "900";

export type Color<Prefix extends string> =
  | `${Prefix}-${Exclude<string, "">}-${ColorVariant}`
  | `${Prefix}-${Exclude<string, "">}`;

export type ColorWoPrefix = `${Exclude<string, "">}-${ColorVariant}`;

export type TypeFace =
  | "thin"
  | "extralight"
  | "light"
  | "normal"
  | "medium"
  | "semibold"
  | "bold"
  | "extrabold"
  | "black";

export type DefaultVariants = "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "plain";

export type DefaultSizes = "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl";
export type BreakPoints = "xs" | "sm" | "md" | "lg" | "xl" | "xxl";

export type SpacingValue =
  | "0"
  | "0.5"
  | "1"
  | "1.5"
  | "2"
  | "2.5"
  | "3"
  | "3.5"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "11"
  | "12"
  | "14"
  | "16"
  | "20"
  | "24"
  | "28"
  | "32"
  | "36"
  | "40"
  | "44"
  | "48"
  | "52"
  | "56"
  | "60"
  | "64"
  | "72"
  | "80"
  | "96";

export type Spacing = SpacingValue | `x-${SpacingValue}` | `y-${SpacingValue}`;

export interface HeadlessTransitionProps {
  enter: string;
  enterFrom: string;
  enterTo: string;
  leave: string;
  leaveFrom: string;
  leaveTo: string;
}

export type PopperPosition = "top" | "right" | "bottom" | "left" | "bottom-right";
