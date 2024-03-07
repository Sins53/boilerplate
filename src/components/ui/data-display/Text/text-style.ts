import { getComputedClassNames } from "@/utility/tailwind/tailwind-utility";
import { TypeFace } from "@/components/ui/ui.types";
import { TextAlign, TextVariant } from "@/components/ui/data-display/data-display.types";

export type TextAs = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "small" | "p" | "label";

export const VariantAsMapping: Record<TextVariant, TextAs> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  display1: "p",
  display2: "p",
  display3: "p",
  small: "small",
  overline: "span",
  paragraph: "p",
  label: "label",
};

const variantClassMapping = (variant: TextVariant): string => {
  switch (variant) {
    case "h1":
      return "text-5xl  leading-130";
    case "h2":
      return "text-4xl  leading-130";
    case "h3":
      return "text-2xl  leading-130";
    case "h4":
      return "text-xl  leading-130";
    case "h5":
      return "text-lg  leading-130";
    case "h6":
      return "text-base  leading-130";
    case "display1":
      return "text-sm  leading-6";
    case "display2":
      return "text-xs leading-5";
    case "display3":
      return "text-[10px] leading-4";
    case "small":
      return "text-xs  leading-6";
    case "overline":
      return "text-sm  leading-6";
    case "paragraph":
      return "text-base ";
    case "label":
      return "text-sm  leading-4 ";
    default:
      return "text-base";
  }
};

const alignClassMapping = (align: TextAlign): string => {
  switch (align) {
    case "center":
      return "text-center";
    case "left":
      return "text-left";
    case "right":
      return " text-right";
    case "justify":
      return "text-justify";
    case "start":
      return "text-start";
    case "end":
      return "text-end";
    default:
      return "text-start";
  }
};
const typeFaceClassMapping = (typeface: TypeFace): string => {
  switch (typeface) {
    case "bold":
      return "font-bold";
    case "thin":
      return "font-thin";
    case "extralight":
      return "font-extralight	";
    case "light":
      return "font-light";
    case "medium":
      return "font-medium";
    case "semibold":
      return "font-semibold";
    case "extrabold":
      return "font-extrabold";
    case "black":
      return "font-black";
    case "normal":
      return "font-normal";
    default:
      return "font-normal";
  }
};

export const useTextStyleMapper = (
  variant: TextVariant | undefined,
  className: string | undefined,
  align: TextAlign,
  typeface: TypeFace,
  color: string,
  noWrap?: boolean,
): string => {
  return getComputedClassNames(
    alignClassMapping(align),
    typeFaceClassMapping(typeface),
    variant && variantClassMapping(variant),
    color,
    { "whitespace-nowrap text-ellipsis": noWrap },
    className,
  );
};
