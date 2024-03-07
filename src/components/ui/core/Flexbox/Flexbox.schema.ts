import { Align, Direction, Flex, Justify, Wrap } from "@/components/ui/core/core.types";

export const FlexClassMapping: Record<Flex, string> = {
  flex: "flex",
  "inline-flex": "inline-flex",
};

export const WrapClassMapping: Record<Wrap, string> = {
  wrap: "flex-wrap",
  "wrap-reverse": "flex-wrap-reverse",
  nowrap: "flex-nowrap",
};

export const AlignClassMapping: Record<Align, string> = {
  center: "items-center",
  stretch: "items-stretch",
  baseline: "items-baseline",
  "flex-start": "items-start",
  "flex-end": "items-end",
};

export const DirectionClassMapping: Record<Direction, string> = {
  row: "flex-row",
  column: "flex-col",
  "column-reverse": "flex-col-reverse",
  "row-reverse": "flex-row-reverse",
};

export const JustifyClassMapping: Record<Justify, string> = {
  center: "justify-center",
  "space-around": "justify-around",
  "space-between": "justify-between",
  "space-evenly": "justify-evenly",
  "flex-start": "justify-start",
  "flex-end": "justify-end",
};
