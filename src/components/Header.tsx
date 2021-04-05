import { Button, Flex, Image } from "@chakra-ui/react";
import logoImg from "../assets/logo.svg";

export function Header() {
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
        <Button
          color="gray.50"
          fontWeight="normal"
          fontSize="md"
          bg="blue.300"
          borderRadius="1"
          _hover={{ bg: "blue.300", filter: "brightness(0.9)" }}
        >
          Nova transação
        </Button>
      </Flex>
    </Flex>
  );
}