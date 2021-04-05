import { Image } from "@chakra-ui/image";
import { Box, Flex, Text, Grid } from "@chakra-ui/layout";
import incomeImg from "../assets/income.svg";
import outcomeImg from "../assets/outcome.svg";
import totalImg from "../assets/total.svg";

export function Summary() {
  return (
    <Grid templateColumns="repeat(3, 1fr)" w="100%" gap="2rem" mt="-24">
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
          R$17,400.00
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
          - R$500.00
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
          R$16,900.00
        </Text>
      </Box>
    </Grid>
  );
}
