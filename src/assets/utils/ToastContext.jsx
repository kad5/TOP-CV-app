import { createContext, useContext } from "react";
import Toast from "../components/Toast";

export const ToastContext = createContext();

export default function useToast() {
  return useContext(ToastContext);
}
