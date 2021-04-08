import { Flex, HStack, Text, Button } from "@chakra-ui/react";
import { useMutation } from "@apollo/client";
import { DELETE_TRANSACTION } from "../queries/transactions";

interface ITransaction {
  id: string;
  title: string;
  type: "deposit" | "withdraw";
  amount: number;
  category: string;
  createdAt: string;
}

interface DeleteTransactionModalProps {
  transaction: ITransaction;
  onClose: () => void;
}
export function DeleteTransactionModal({
  onClose,
  transaction,
}: DeleteTransactionModalProps) {
  const [deleteTransaction] = useMutation(DELETE_TRANSACTION, {
    update(cache) {
      cache.modify({
        fields: {
          transactions(existingTransactions = [], { readField }) {
            return existingTransactions.filter(
              (transactionRef: { id: string }) =>
                transaction.id !== readField("id", transactionRef)
            );
          },
        },
      });
    },
  });

  const handleDelete = () => {
    deleteTransaction({ variables: { transactionId: transaction.id } });
    onClose();
  };

  return (
    <Flex w="100%" direction="column" p="12">
      <Text fontWeight="bold" mb="6" fontSize="larger">
        Delete transaction
      </Text>

      <Text>
        Are you sure you want to delete this transaction? This action is
        irreversible
      </Text>
      <HStack mt="6" justifyContent="flex-end">
        <Button onClick={handleDelete} colorScheme="red">
          Yes
        </Button>
        <Button onClick={onClose} variant="ghost">
          No
        </Button>
      </HStack>
    </Flex>
  );
}
