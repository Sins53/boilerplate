import { TypeOptions } from "react-toastify";
import { Color } from "@/components/ui/ui.types";

type ToastVariant = TypeOptions;

enum TOAST_TYPE {
  ERROR = "error",
  SUCCESS = "success",
  WARNING = "warning",
  INFO = "info",
  DEFAULT = "default",
}

const ToastVariantMessageMapping: Record<ToastVariant, string> = {
  error: "Something Went Wrong!",
  info: "info",
  warning: "warning",
  success: "The Operation is successfully Executed",
  default: "Operation successful",
};

const ToastIconColorClassMapping: Record<ToastVariant, Color<"fill">> = {
  error: "fill-red-550",
  info: "fill-blue-600",
  warning: "fill-yellow-600",
  success: "fill-green-700",
  default: "fill-black",
};

export const ToastIconBGColorClassMapping: Record<ToastVariant, Color<"bg">> = {
  error: "bg-red-550",
  info: "bg-blue-600",
  warning: "bg-yellow-600",
  success: "bg-green-700",
  default: "bg-black",
};

export const ToastProgressBGColorClassMapping: Record<ToastVariant, Color<"bg">> = {
  error: "bg-red-550",
  info: "bg-primary",
  warning: "bg-yellow-600",
  success: "bg-green-700",
  default: "bg-black",
};

const ToastBorderColorClassMapping: Record<ToastVariant, Color<"border">> = {
  error: "border-red-550",
  info: "border-blue-600",
  warning: "border-yellow-600",
  success: "border-green-700",
  default: "border-black",
};

const DrawLine = {
  verticalLine: "border-r-2 border-cool-gray-300 h-full mr-2",
};

export type { ToastVariant };

export { TOAST_TYPE, ToastVariantMessageMapping, ToastIconColorClassMapping, ToastBorderColorClassMapping, DrawLine };
