import { TextAs, useTextStyleMapper, VariantAsMapping } from "@/components/ui/data-display/Text/text-style";
import React, { PropsWithChildren } from "react";
import { Color, TypeFace } from "@/components/ui/ui.types";
import { TextAlign, TextVariant } from "@/components/ui/data-display/data-display.types";

export interface TextProps<AS extends TextAs = TextAs>
  extends PropsWithChildren,
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadElement>, HTMLHeadElement> {
  variant?: TextVariant; // the type of text
  as?: AS; // eg: h1, h2, p, small
  align?: TextAlign;
  typeface?: TypeFace;
  noWrap?: boolean;
  color?: Color<"text">; // tailwind text color class
  className?: string;
}

const Text = React.forwardRef<HTMLElement, TextProps>((props, ref) => {
  const {
    as,
    variant = "paragraph",
    align = "inherit",
    noWrap,
    color = "text-onSurfaceVariant",
    typeface = "normal",
    className,
    children,
    ...restProps
  } = props;

  const computedClasses = useTextStyleMapper(variant, className, align, typeface, color, noWrap);

  return React.createElement(
    as ?? VariantAsMapping[variant],
    { ...restProps, ref, className: computedClasses },
    children,
  );
});

Text.displayName = "Text";

export default Text;
