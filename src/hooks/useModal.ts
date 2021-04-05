import { ModalContext, ModalContextOptions } from "../providers/ModalProvider";
import { useContext } from "react";

export function useModal(): ModalContextOptions {
  const context = useContext(ModalContext);
  if (!context)
    throw new Error("useModal has to be used within a ModalProvider");
  return context;
}
