import {
  Modal as ChakraModal,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/modal";
import React from "react";

interface ModalProps {
  closeModal: () => void;
}

export const Modal: React.FC<ModalProps> = ({ closeModal, children }) => {
  return (
    <ChakraModal size="lg" isOpen onClose={closeModal}>
      <ModalOverlay />
      <ModalContent>{children}</ModalContent>
    </ChakraModal>
  );
};
