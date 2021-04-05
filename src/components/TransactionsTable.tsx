import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import { api } from "../services/api";

interface ITransaction {
  id: number;
  title: string;
  type: "deposit" | "withdraw";
  amount: number;
  category: string;
  createdAt: string;
}

export function TransactionsTable() {
  const [transactions, setTransactions] = useState<ITransaction[]>([]);

  useEffect(() => {
    (async function () {
      try {
        const { data } = await api.get<{ transactions: ITransaction[] }>(
          "/transactions"
        );
        setTransactions(data.transactions);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

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
        {transactions.map((transaction) => {
          const formattedAmount = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(transaction.amount);

          return (
            <Tr key={transaction.id}>
              <Td bg="white" padding="1rem 2rem">
                {transaction.title}
              </Td>
              <Td
                bg="white"
                padding="1rem 2rem"
                color={transaction.type === "deposit" ? "green.300" : "red.500"}
              >
                {transaction.type === "deposit"
                  ? `${formattedAmount}`
                  : `-${formattedAmount}`}
              </Td>
              <Td bg="white" padding="1rem 2rem" color="gray.400">
                {transaction.category}
              </Td>
              <Td bg="white" padding="1rem 2rem" color="gray.400">
                {format(new Date(transaction.createdAt), "dd/MM/yyyy")}
              </Td>
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
}
