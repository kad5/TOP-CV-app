import { createContext, useContext } from "react";

export const CVContext = createContext();

export default function useCV() {
  return useContext(CVContext);
}
