import { BoxProps } from "@/components/ui/core/Box";
import { Align, Direction, Flex, Justify, Wrap } from "@/components/ui/core/core.types";

export interface FlexboxProps extends BoxProps {
  className?: string;
  align?: Align;
  justify?: Justify;
  direction?: Direction;
  wrap?: Wrap;
  display?: Flex;
}
