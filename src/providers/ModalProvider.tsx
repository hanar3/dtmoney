import React, { createContext, useCallback } from "react";
import { Modal } from "../components/Modal";

export interface ModalContextOptions {
  openModal: (component: React.ComponentType<{ onClose: () => void }>) => void;
}
export const ModalContext = createContext({} as ModalContextOptions);

export const ModalProvider: React.FC = ({ children }) => {
  const [openModals, setOpenModals] = React.useState<{
    [key: string]: React.ComponentType<any>;
  }>({});

  const makeCloseModal = (id: string) => {
    return () => {
      setOpenModals((prev) => {
        const copy = { ...prev };
        delete copy[id];
        return copy;
      });
    };
  };

  const openModal = useCallback((component: React.ComponentType<any>) => {
    setOpenModals((prev) => ({ ...prev, [Date.now()]: component }));
  }, []);

  return (
    <ModalContext.Provider value={{ openModal }}>
      {children}
      {Object.keys(openModals).map((modal) => {
        const Component = openModals[modal];
        console.log({ Component });

        return (
          <Modal key={modal} closeModal={makeCloseModal(modal)}>
            <Component onClose={makeCloseModal(modal)} />
          </Modal>
        );
      })}
    </ModalContext.Provider>
  );
};
