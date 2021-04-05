import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";

export function TransactionsTable() {
  return (
    <Table
      mt="12"
      size="lg"
      css={{ borderCollapse: "separate", borderSpacing: "0 0.5rem" }}
    >
      <Thead border="0">
        <Tr color="gray.300">
          <Th
            border="0"
            color="gray.500"
            fontSize="16"
            fontWeight="normal"
            padding="1rem 2rem"
            textAlign="left"
          >
            Title
          </Th>
          <Th
            border="0"
            color="gray.500"
            fontSize="16"
            fontWeight="normal"
            padding="1rem 2rem"
            textAlign="left"
          >
            Value
          </Th>
          <Th
            border="0"
            color="gray.500"
            fontSize="16"
            fontWeight="normal"
            padding="1rem 2rem"
            textAlign="left"
          >
            Category
          </Th>
          <Th
            border="0"
            color="gray.500"
            fontSize="16"
            fontWeight="normal"
            padding="1rem 2rem"
            textAlign="left"
          >
            Date
          </Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td bg="white" padding="1rem 2rem">
            Develop a website
          </Td>
          <Td bg="white" padding="1rem 2rem">
            R$ 12.0000
          </Td>
          <Td bg="white" padding="1rem 2rem" color="gray.400">
            Work
          </Td>
          <Td bg="white" padding="1rem 2rem" color="gray.400">
            20/01/2021
          </Td>
        </Tr>
        <Tr>
          <Td bg="white" padding="1rem 2rem">
            Hamburger
          </Td>
          <Td bg="white" padding="1rem 2rem" color="red">
            -R$ 59.00
          </Td>
          <Td bg="white" padding="1rem 2rem" color="gray.400">
            Alimentação
          </Td>
          <Td bg="white" padding="1rem 2rem" color="gray.400">
            20/01/2021
          </Td>
        </Tr>
        <Tr>
          <Td bg="white" padding="1rem 2rem">
            Develop a website
          </Td>
          <Td bg="white" padding="1rem 2rem" color="green.300">
            R$ 12.0000
          </Td>
          <Td bg="white" padding="1rem 2rem" color="gray.400">
            Work
          </Td>
          <Td bg="white" padding="1rem 2rem" color="gray.400">
            20/01/2021
          </Td>
        </Tr>
      </Tbody>
    </Table>
  );
}
