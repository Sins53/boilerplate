import "react-toastify/dist/ReactToastify.css";
import { ToastContainerProps } from "react-toastify";

const toastConfig: ToastContainerProps = {
  pauseOnHover: true,
  position: "bottom-center",
  autoClose: 8000,
};

export default toastConfig;
