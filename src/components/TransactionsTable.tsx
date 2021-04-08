import {
  HStack,
  Icon,
  IconButton,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import { format } from "date-fns";
import { FiEdit, FiTrash } from "react-icons/fi";
import { useModal } from "../hooks/useModal";
import { useTransactions } from "../hooks/useTransactions";
import { DeleteTransactionModal } from "./DeleteTransactionModal";
import { EditTransactionModal } from "./EditTransactionModal";

export function TransactionsTable() {
  const { error, isLoading, transactions } = useTransactions();
  const modal = useModal();

  const bg = useColorModeValue("white", "gray.700");

  if (isLoading) return <div>Loading</div>;
  if (error) return <div>Failed to load data</div>;

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
          <Th
            border="0"
            color="gray.500"
            fontSize="16"
            fontWeight="normal"
            padding="1rem 2rem"
            textAlign="left"
          >
            Actions
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
              <Td bg={bg} padding="1rem 2rem">
                {transaction.title}
              </Td>
              <Td
                bg={bg}
                padding="1rem 2rem"
                color={transaction.type === "deposit" ? "green.300" : "red.500"}
              >
                {transaction.type === "deposit"
                  ? `${formattedAmount}`
                  : `-${formattedAmount}`}
              </Td>
              <Td bg={bg} padding="1rem 2rem" color="gray.400">
                {transaction.category}
              </Td>
              <Td bg={bg} padding="1rem 2rem" color="gray.400">
                {format(new Date(transaction.createdAt), "dd/MM/yyyy")}
              </Td>
              <Td bg={bg} padding="1rem 2rem" color="gray.400">
                <HStack>
                  <IconButton
                    color="red.300"
                    aria-label="delete"
                    onClick={() =>
                      modal.openModal(({ onClose }) => (
                        <DeleteTransactionModal
                          onClose={onClose}
                          transaction={transaction}
                        />
                      ))
                    }
                    icon={<Icon as={FiTrash} />}
                  />
                  <IconButton
                    color="gray.300"
                    aria-label="Edit"
                    icon={<Icon as={FiEdit} />}
                    onClick={() =>
                      modal.openModal(({ onClose }) => (
                        <EditTransactionModal
                          onClose={onClose}
                          transaction={transaction}
                        />
                      ))
                    }
                  />
                </HStack>
              </Td>
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
}
