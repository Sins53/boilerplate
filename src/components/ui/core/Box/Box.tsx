import React from "react";
import { BoxAS } from "@/components/ui/core/core.types";

type DivProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export interface BoxProps<T extends BoxAS = BoxAS> extends DivProps {
  as?: T;
}

const Box = React.forwardRef<HTMLElement, BoxProps>((props, ref) => {
  const { as = "div", children, className, onClick, ...restProps } = props;
  return React.createElement(
    as,
    {
      ...restProps,
      className: className || onClick ? `${onClick ? "cursor-pointer" : ""} ${className ?? ""}`.trim() : undefined,
      onClick,
      ref,
    },
    children,
  );
});

Box.displayName = "Box";

export default Box;
