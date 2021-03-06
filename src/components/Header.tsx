import {
  Button,
  Flex,
  HStack,
  Icon,
  Image,
  theme,
  useColorMode,
} from "@chakra-ui/react";
import Switch from "react-switch";
import { FiSun, FiMoon } from "react-icons/fi";
import logoImg from "../assets/logo.svg";
import { useModal } from "../hooks/useModal";
import { NewTransactionModal } from "./NewTransactionModal";

export function Header() {
  const modal = useModal();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex as="header" bg="blue.500">
      <Flex
        w="100%"
        maxW="1120px"
        mx="auto"
        padding="2rem 1rem 12rem"
        align="center"
        justify="space-between"
      >
        <Image src={logoImg} alt="dt money" />
        <HStack>
          <Switch
            onColor={theme.colors.gray[800]}
            offColor={theme.colors.gray[800]}
            uncheckedIcon={
              <Icon as={FiSun} minW="100%" fontSize="16" color="gray.50" />
            }
            checkedIcon={
              <Icon as={FiMoon} minW="100%" fontSize="16" color="gray.50" />
            }
            checked={colorMode === "dark"}
            onChange={toggleColorMode}
          />

          <Button
            color="gray.50"
            fontWeight="normal"
            fontSize="md"
            bg="blue.300"
            borderRadius="1"
            _hover={{ bg: "blue.300", filter: "brightness(0.9)" }}
            _active={{ bg: "blue.300", filter: "brightness(0.9)" }}
            onClick={() => modal.openModal(NewTransactionModal)}
          >
            New transaction
          </Button>
        </HStack>
      </Flex>
    </Flex>
  );
}
