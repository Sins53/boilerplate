import React from "react";
import { toast } from "react-toastify";
import {
  TOAST_TYPE,
  ToastIconBGColorClassMapping,
  // ToastIconColorClassMapping,
  ToastProgressBGColorClassMapping,
  ToastVariant,
} from "@/components/ui/data-display/Toaster/Toaster.schema";
import { Box } from "@/components/ui/core/Box";
import { Button } from "@/components/ui/core/Button";
import Text from "@/components/ui/data-display/Text/Text";
// import { Icons } from "@/components/ui/core/Icons";

export interface IToasterProps {
  message?: string;
  type?: ToastVariant;
  showIcon?: boolean;
  icon?: React.ReactNode;
  toastId?: string | number;
  onUndo?(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
  closeOnUndo?: boolean;

  showCloseButton?: boolean;
}

const initToaster = (props: IToasterProps) => {
  const {
    type = TOAST_TYPE.DEFAULT,
    message,
    icon,
    showIcon = true,
    showCloseButton = false,
    toastId,
    onUndo,
    closeOnUndo = true,
  } = props;

  return toast(
    () => (
      <Box className="flex">
        <Box className="flex grow items-center">
          {showIcon && icon && (
            <Box
              data-testid="toast-icon"
              className={`mr-2 ${ToastIconBGColorClassMapping[type]} rounded-full bg-opacity-20 p-1`}
            >
              {icon}
            </Box>
          )}
          <Box className={`text-sm font-normal leading-4 text-cool-gray-900`}>
            <Text variant={"label"} className="text-onSurface">
              {message}
            </Text>
          </Box>
        </Box>
        <Box className="flex items-center">
          {onUndo && (
            <Button
              data-testid="toast-undo"
              onClick={(event) => {
                // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                !closeOnUndo && event.stopPropagation();
                onUndo?.(event);
              }}
              variant={"plain"}
              type="button"
              className="mx-1 flex whitespace-nowrap font-semibold text-success"
            >
              Undo
            </Button>
          )}
        </Box>
      </Box>
    ),
    {
      className: `place-items-center bg-surface rounded-md shadow-lg mx-8 md:mx-0 ${
        onUndo ? "md:w-[450px]" : "md:w-[477px]"
      }`,
      // closeButton: showCloseButton && <Icons.Dismiss size={"md"} fillColor={"fill-cool-gray-700"} />,
      closeButton: showCloseButton && <div>icon</div>,
      bodyClassName: "!p-0",
      autoClose: 5000,
      toastId,
      progressClassName: (context) =>
        `${context?.defaultClassName?.replace(/Toastify__progress-bar-theme/g, "")} ${
          ToastProgressBGColorClassMapping[type]
        } !h-1`,
    },
  );
};

const successToast = (message: string, props: Omit<IToasterProps, "type" | "message"> = {}) => {
  initToaster({
    type: TOAST_TYPE.SUCCESS,
    message,
    // icon: <Icons.CheckMark size={"sm"} fillColor={ToastIconColorClassMapping.success} />,
    icon: <div>icon</div>,
    ...props,
  });
};

const warnToast = (message: string, props: Omit<IToasterProps, "type" | "message"> = {}) => {
  initToaster({
    type: TOAST_TYPE.WARNING,
    message,
    // icon: <Icons.Warning size={"sm"} fillColor={ToastIconColorClassMapping.warning} />,
    icon: <div>icon</div>,
    ...props,
  });
};

const infoToast = (message: string, props: Omit<IToasterProps, "type" | "message"> = {}) => {
  initToaster({
    type: TOAST_TYPE.INFO,
    message,
    // icon: <Icons.Info size={"sm"} weight={"outline"} fillColor={ToastIconColorClassMapping.info} />,
    icon: <div>icon</div>,
    ...props,
  });
};

const failedToast = (message: string, props: Omit<IToasterProps, "type" | "message"> = {}) => {
  initToaster({
    type: TOAST_TYPE.ERROR,
    message,
    // icon: <Icons.Warning size={"sm"} fillColor={ToastIconColorClassMapping.error} />,
    icon: <div>icon</div>,
    ...props,
  });
};

const Toast = {
  info: infoToast,
  error: failedToast,
  success: successToast,
  warning: warnToast,
};

export default Toast;
