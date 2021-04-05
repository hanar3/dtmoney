import { Button } from "@chakra-ui/button";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";
import { useState } from "react";

export function BaseModal() {
  const [isOpen, setIsOpen] = useState(true);

  function handleClose() {
    setIsOpen(false);
  }

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est,
            maiores illum! Esse repellat fuga ipsam facere, veniam harum, earum
            tenetur aliquam ut optio eligendi eveniet iusto exercitationem nisi
            dignissimos vitae?
          </p>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleClose}>
            Close
          </Button>
          <Button variant="ghost">Secondary Action</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
