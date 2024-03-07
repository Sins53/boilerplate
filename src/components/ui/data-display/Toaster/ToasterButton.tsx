/* eslint-disable @typescript-eslint/no-unused-vars */
import Toast, { IToasterProps } from "@/components/ui/data-display/Toaster";
import { ToastContainer } from "react-toastify";

const ToasterButton = (props: IToasterProps) => {
  const { type, message, ...restProps } = props;
  return (
    <>
      <ToastContainer />
      <button type="button" onClick={() => Toast.info(message as string, { ...restProps })}>
        ShowToast
      </button>
    </>
  );
};

export default ToasterButton;
