import React, { createContext, useCallback, useState } from "react";
import { Modal } from "../components/Modal";

export interface ModalContextOptions {
  openModal: (component: React.ReactNode) => void;
  closeModal: () => void;
}
export const ModalContext = createContext({} as ModalContextOptions);

export const ModalProvider: React.FC = ({ children }) => {
  const [openModals, setOpenModals] = React.useState<{
    [key: string]: React.ReactNode;
  }>({});

  const openModal = useCallback((component: React.ReactNode) => {
    setOpenModals((prev) => ({ ...prev, [Date.now()]: component }));
  }, []);

  const closeModal = useCallback(() => {
    console.log("closeModal");
  }, []);

  const makeCloseModal = (id: string) => {
    return () => {
      setOpenModals((prev) => {
        const copy = { ...prev };
        delete copy[id];
        return copy;
      });
    };
  };

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      {Object.keys(openModals).map((modal) => (
        <Modal key={modal} closeModal={makeCloseModal(modal)}>
          {openModals[modal]}
        </Modal>
      ))}
    </ModalContext.Provider>
  );
};
