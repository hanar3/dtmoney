import { Image } from "@chakra-ui/image";
import { Box, Flex, Text, Grid, SimpleGrid } from "@chakra-ui/react";
import { useTransform } from "framer-motion";

import incomeImg from "../assets/income.svg";
import outcomeImg from "../assets/outcome.svg";
import totalImg from "../assets/total.svg";
import { useTransactions } from "../hooks/useTransactions";

export function Summary() {
  const { transactions } = useTransactions();
  const total = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "deposit") {
        acc.income += transaction.amount;
        acc.total += transaction.amount;
      } else {
        acc.outcome += transaction.amount;
        acc.total -= transaction.amount;
      }

      return acc;
    },
    {
      income: 0,
      outcome: 0,
      total: 0,
    }
  );

  return (
    <SimpleGrid minChildWidth="300px" spacing="20px" mt="-24">
      <Box w="100%" bg="white" padding="1.5rem 2rem" borderRadius="4">
        <Flex as="header" align="center" justify="space-between">
          <Text>Entradas</Text>
          <Image src={incomeImg} alt="Entradas" />
        </Flex>
        <Text
          fontSize="3xl"
          mt="4"
          fontWeight="500"
          lineHeight="3rem"
          as="strong"
        >
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(total.income)}
        </Text>
      </Box>
      <Box w="100%" bg="white" padding="1.5rem 2rem" borderRadius="4">
        <Flex as="header" align="center" justify="space-between">
          <Text>Saídas</Text>
          <Image src={outcomeImg} alt="Entradas" />
        </Flex>
        <Text
          fontSize="3xl"
          mt="4"
          fontWeight="500"
          lineHeight="3rem"
          as="strong"
        >
          -
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(total.outcome)}
        </Text>
      </Box>
      <Box
        w="100%"
        bg="green.300"
        color="white"
        padding="1.5rem 2rem"
        borderRadius="4"
      >
        <Flex as="header" align="center" justify="space-between">
          <Text>Total</Text>
          <Image src={totalImg} alt="Entradas" />
        </Flex>
        <Text
          fontSize="3xl"
          mt="4"
          fontWeight="500"
          lineHeight="3rem"
          as="strong"
        >
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(total.total)}
        </Text>
      </Box>
    </SimpleGrid>
  );
}
