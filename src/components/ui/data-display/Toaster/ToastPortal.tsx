import React from "react";
import ReactDOM from "react-dom";
import { ToastContainer } from "react-toastify";
import toastConfig from "./toast.config";

const toastRoot = document.getElementById("toast-container") as HTMLElement;

const ToastPortal = () => {
  return ReactDOM.createPortal(<ToastContainer {...toastConfig} />, toastRoot);
};

export default ToastPortal;
