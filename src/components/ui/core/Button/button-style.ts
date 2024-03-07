import { getComputedClassNames } from "@/utility/tailwind/tailwind-utility";
import { DefaultSizes } from "@/components/ui/ui.types";
import { ButtonDisplays, ButtonIconStyles, ButtonTypes, ButtonVariants } from "@/components/ui/core/core.types";

export const ButtonBaseClasses = "rounded";
const DisabledMapping = "disabled:opacity-[0.64] ";

const DefaultClassesMapping: Record<ButtonVariants, Record<ButtonTypes, string>> = {
  plain: {
    solid: "",
    outlined: "",
    ghost: "",
  },
  primary: {
    solid: "text-onPrimary bg-primary",
    outlined: "border border-primary text-primary",
    ghost: "text-primary bg-onPrimary",
  },
  secondary: {
    solid: "text-onSecondary bg-secondary",
    outlined: "border border-primary text-secondary",
    ghost: "text-secondary bg-onSecondary",
  },
  info: {
    solid: "text-white bg-blue-700",
    outlined: "border border-blue-700 text-blue-700",
    ghost: "text-blue-700 bg-white",
  },
  success: {
    solid: "text-onSuccess bg-success",
    outlined: "border border-success text-success",
    ghost: "text-success bg-onSuccess",
  },
  warning: {
    solid: "text-onWarning bg-warning",
    outlined: "border border-warning text-warning",
    ghost: "text-warning bg-onWarning",
  },
  danger: {
    solid: "text-onError bg-error",
    outlined: "border border-error text-error",
    ghost: "text-error bg-onError",
  },
  gray: {
    solid: "text-gray-700 bg-gray-300 ",
    outlined: "border border-gray-300 text-gray-700",
    ghost: "text-onSurfaceVariant bg-inherit",
  },
};

const HoverClassesMapping: Record<ButtonVariants, Record<ButtonTypes, string>> = {
  plain: {
    solid: "",
    outlined: "",
    ghost: "",
  },
  primary: {
    solid: "hover:brightness-95",
    outlined: "hover:bg-primary hover:text-onPrimary",
    ghost: "hover:bg-primary hover:text-onPrimary",
  },
  secondary: {
    solid: "hover:brightness-95",
    outlined: "hover:bg-secondary hover:text-onSecondary",
    ghost: "hover:bg-secondaryContainer hover:text-onSecondaryContainer",
  },
  info: {
    solid: "hover:brightness-95",
    outlined: "hover:bg-blue-700 hover:text-white",
    ghost: "hover:bg-blue-50",
  },
  success: {
    solid: "hover:brightness-95",
    outlined: "hover:bg-success hover:text-onSuccess",
    ghost: "hover:bg-successContainer hover:text-onSuccessContainer",
  },
  warning: {
    solid: "hover:brightness-95",
    outlined: "hover:bg-warning hover:text-onWarning",
    ghost: "hover:bg-warningContainer hover:text-onWarningContainer",
  },
  danger: {
    solid: "hover:brightness-95",
    outlined: "hover:bg-error hover:text-onError",
    ghost: "hover:bg-errorContainer hover:text-onErrorContainer",
  },
  gray: {
    solid: "hover:brightness-95",
    outlined: "hover:bg-gray-300 hover:text-gray-700",
    ghost: "hover:bg-surfaceVariant",
  },
};

const ClickedMapping: Record<ButtonVariants, Record<ButtonTypes, string>> = {
  plain: {
    solid: "",
    outlined: "",
    ghost: "",
  },
  primary: {
    solid: "active:shadow-[inset_0px_2px_8px_rgba(0,0,0,0.32)]",
    ghost: "active:bg-purple-100 active:shadow-none",
    outlined: "active:shadow-[inset_0px_2px_8px_rgba(0,0,0,0.32)]",
  },
  secondary: {
    solid: "active:shadow-[inset_0px_2px_8px_rgba(0,0,0,0.32)]",
    ghost: "active:bg-purple-100 active:shadow-none",
    outlined: "active:shadow-[inset_0px_2px_8px_rgba(0,0,0,0.32)]",
  },
  info: {
    solid: "active:shadow-[inset_0px_2px_8px_rgba(0,0,0,0.32)]",
    ghost: "active:bg-blue-100 active:shadow-none",
    outlined: "active:shadow-[inset_0px_2px_8px_rgba(0,0,0,0.32)]",
  },
  success: {
    solid: "active:shadow-[inset_0px_2px_8px_rgba(0,0,0,0.32)]",
    ghost: "active:bg-green-200 active:shadow-none",
    outlined: "active:shadow-[inset_0px_2px_8px_rgba(0,0,0,0.32)]",
  },
  warning: {
    solid: "active:shadow-[inset_0px_2px_8px_rgba(0,0,0,0.32)]",
    ghost: "active:bg-purple-100 active:shadow-none",
    outlined: "active:shadow-[inset_0px_2px_8px_rgba(0,0,0,0.32)]",
  },
  danger: {
    solid: "active:shadow-[inset_0px_2px_8px_rgba(0,0,0,0.32)]",
    ghost: "active:bg-red-100 active:shadow-none",
    outlined: "active:shadow-[inset_0px_2px_8px_rgba(0,0,0,0.32)]",
  },
  gray: {
    solid: "active:shadow-[inset_0px_2px_8px_rgba(0,0,0,0.32)]",
    ghost: "active:bg-gray-300 active:shadow-none",
    outlined: "active:shadow-[inset_0px_2px_8px_rgba(0,0,0,0.32)]",
  },
};

export const useDisplayMapping: Record<ButtonDisplays, string> = {
  block: "w-full",
  inline: "",
};

export const useSizeMappings = (buttonSize: DefaultSizes): string => {
  switch (buttonSize) {
    case "sm":
      return "py-1 px-2 text-xs leading-4";
    case "md":
      return "py-2 px-3 text-sm leading-4";
    case "lg":
      return "py-3 px-4 text-base leading-4";
    case "xl":
      return "p-4 text-base leading-4";
    default:
      return "py-2 px-3 text-sm leading-4";
  }
};

export const useSizeWiseIconStyle = (buttonSize: DefaultSizes): ButtonIconStyles => {
  switch (buttonSize) {
    case "md":
    case "lg":
      return {
        left: "p-0 mr-2",
        right: "p-0 ml-2",
      };
    default:
      return {
        left: "p-0 mr-1",
        right: "p-0 ml-1",
      };
  }
};

export const useButtonStyleMapper = (
  size: DefaultSizes,
  display: ButtonDisplays,
  variant: ButtonVariants,
  as: ButtonTypes,
  className: string | undefined,
) => {
  return {
    container: getComputedClassNames(
      "transition ease-out delay-150",
      ButtonBaseClasses,
      useSizeMappings(size),
      useDisplayMapping[display],
      DefaultClassesMapping[variant][as],
      HoverClassesMapping[variant][as],
      "focus:outline-0",
      // FocusedClassesMapping[variant][as],
      ClickedMapping[variant][as],
      DisabledMapping,
      className,
    ),
    icon: useSizeWiseIconStyle(size),
  };
};
