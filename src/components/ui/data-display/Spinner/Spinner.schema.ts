import { DefaultSizes, DefaultVariants } from "@/components/ui/ui.types";

export type SpinnerTypes = "circleHalf" | "circleHalfFade" | "circleFull" | "arcSpin";
export type SpinnerVariants = Exclude<DefaultVariants, "plain"> | "white";

export const IosColorMapping: Record<SpinnerVariants, string> = {
  primary: "bg-primary",
  info: "bg-blue-700",
  success: "bg-green-700",
  warning: "bg-yellow-700",
  danger: "bg-red-700",
  secondary: "bg-cool-gray-600",
  white: "bg-white",
};

export const SpinnerSizeClassMapping: Record<DefaultSizes, string> = {
  xs: "h-3 w-3",
  sm: "h-4 w-4",
  md: "h-7 w-7",
  lg: "h-12 w-12",
  xl: "h-14 w-14",
  xxl: "h-16 w-16",
  xxxl: "h-20 w-20",
};

export const LoadingFilledMapping: Record<SpinnerVariants, Record<SpinnerTypes, string>> = {
  primary: {
    circleHalf: " border-primary",
    circleHalfFade: `border-b-primary border-r-primary/[0.75] `,
    arcSpin: "border-x-primary ",
    circleFull: " border-t-primary border-r-primary",
  },
  white: {
    circleHalf: " border-white",
    circleHalfFade: `border-b-white border-r-white/[0.75] `,
    arcSpin: "border-x-white ",
    circleFull: " border-t-white border-r-white",
  },
  info: {
    circleHalf: " border-blue-700",
    circleHalfFade: `border-b-blue-500 border-r-blue-500/[0.75] `,

    arcSpin: "border-x-blue-700 ",
    circleFull: " border-t-blue-700 border-r-blue-700",
  },
  success: {
    circleHalf: " border-green-700",
    circleHalfFade: `border-b-green-700 border-r-green-700/[0.75]  `,

    arcSpin: "border-x-green-700",
    circleFull: " border-t-green-700 border-r-green-700",
  },
  warning: {
    circleHalf: " border-yellow-700",
    circleHalfFade: `border-b-yellow-700 border-r-yellow-700/[0.75] `,

    arcSpin: "border-x-yellow-700 ",
    circleFull: " border-t-yellow-700 border-r-yellow-700",
  },
  danger: {
    circleHalf: " border-red-700",
    circleHalfFade: `border-b-red-700 border-r-red-700/[0.75]  `,

    arcSpin: "border-x-red-700 ",
    circleFull: " border-t-red-700 border-r-red-700",
  },
  secondary: {
    circleHalf: " border-cool-gray-600",
    circleHalfFade: `border-b-cool-gray-600 border-r-cool-gray-600/[0.75] `,

    arcSpin: "border-x-cool-gray-600 ",
    circleFull: " border-t-cool-gray-600 border-r-cool-gray-600",
  },
};

export const LoadingBorderUnfilledMapping: Record<SpinnerVariants, Record<SpinnerTypes, string>> = {
  primary: {
    circleHalf: ` border-b-transparent `,
    circleHalfFade: ` border-t-transparent border-l-transparent  `,
    arcSpin: "  border-y-transparent ",
    circleFull: " border-b-primary/[0.4] border-l-primary/[0.6]  ",
  },
  white: {
    circleHalf: ` border-b-transparent `,
    circleHalfFade: ` border-t-transparent border-l-transparent  `,
    arcSpin: "  border-y-transparent ",
    circleFull: " border-b-white/[0.4] border-l-primary/[0.6]  ",
  },
  info: {
    circleHalf: ` border-b-transparent `,
    circleHalfFade: ` border-t-transparent border-l-transparent`,

    arcSpin: "  border-y-transparent ",
    circleFull: " border-b-blue-700/[0.4] border-l-blue-700/[0.4]",
  },
  success: {
    circleHalf: ` border-b-transparent `,
    circleHalfFade: `border-t-transparent border-l-transparent `,

    arcSpin: "  border-y-transparent ",
    circleFull: " border-b-green-700/[0.4] border-l-green-700/[0.6]  ",
  },
  warning: {
    circleHalf: ` border-b-transparent `,
    circleHalfFade: ` border-t-transparent border-l-transparent`,

    arcSpin: "  border-y-transparent ",
    circleFull: " border-b-yellow-700/[0.4] border-l-yellow-700/[0.6]  ",
  },
  danger: {
    circleHalf: ` border-b-transparent `,
    circleHalfFade: `border-t-transparent border-l-transparent `,

    arcSpin: "  border-y-transparent ",
    circleFull: " border-b-red-700/[0.4] border-l-red-700/[0.6]  ",
  },
  secondary: {
    circleHalf: ` border-b-transparent `,
    circleHalfFade: `border-t-transparent border-l-transparent `,

    arcSpin: "  border-y-transparent ",
    circleFull: " border-b-gray-600/[0.4] border-l-gray-600/[0.6]  ",
  },
};

export const LoadingBaseMapping: Record<SpinnerVariants, Record<SpinnerTypes, string>> = {
  primary: {
    circleHalf: `rounded-full border-4   animate-spin`,
    circleHalfFade: `rounded-full border-4   animate-spin	`,
    arcSpin: " border-4   rounded-full animate-spin",
    circleFull: "border-4  rounded-full animate-spin ",
  },
  white: {
    circleHalf: `rounded-full border-4   animate-spin`,
    circleHalfFade: `rounded-full border-4   animate-spin	`,
    arcSpin: " border-4   rounded-full animate-spin",
    circleFull: "border-4  rounded-full animate-spin ",
  },
  info: {
    circleHalf: `rounded-full border-4   animate-spin`,
    circleHalfFade: `rounded-full border-4   animate-spin	`,

    arcSpin: "  border-4   rounded-full animate-spin ",
    circleFull: " border-4  rounded-full animate-spin  ",
  },
  success: {
    circleHalf: `rounded-full border-4   animate-spin `,
    circleHalfFade: ` rounded-full border-4   animate-spin `,

    arcSpin: "border-4   rounded-full animate-spin",
    circleFull: " border-4  rounded-full animate-spin ",
  },
  warning: {
    circleHalf: ` rounded-full border-4   animate-spin `,
    circleHalfFade: ` rounded-full border-4   animate-spin `,

    arcSpin: " border-4   rounded-full animate-spin",
    circleFull: "border-4  rounded-full animate-spin ",
  },
  danger: {
    circleHalf: ` rounded-full border-4   animate-spin `,
    circleHalfFade: ` rounded-full border-4   animate-spin `,

    arcSpin: " border-4   rounded-full animate-spin",
    circleFull: " border-4  rounded-full animate-spin ",
  },
  secondary: {
    circleHalf: ` rounded-full border-4   animate-spin `,
    circleHalfFade: `rounded-full border-4   animate-spin`,

    arcSpin: " border-4   rounded-full animate-spin ",
    circleFull: "border-4  rounded-full animate-spin ",
  },
};

export const BallSpinColorMapping: Record<SpinnerVariants, string> = {
  primary: "text-primary",
  info: "text-blue-700",
  success: "text-green-700",
  warning: "text-yellow-700",
  danger: "text-red-700",
  secondary: "text-cool-gray-600",
  white: "text-white",
};
