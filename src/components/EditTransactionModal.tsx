import {
  Button,
  Flex,
  HStack,
  Input,
  Stack,
  Text,
  IconButton,
  Icon,
  Image,
  theme,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { transparentize } from "polished";
import { FaTimes } from "react-icons/fa";
import { gql, StoreObject, useMutation } from "@apollo/client";
import incomeImg from "../assets/income.svg";
import outcomeImg from "../assets/outcome.svg";
import { UPDATE_TRANSACTION } from "../queries/transactions";

interface ITransaction {
  id: string;
  title: string;
  type: "deposit" | "withdraw";
  amount: number;
  category: string;
  createdAt: string;
}

interface TransactionModalProps {
  transaction: ITransaction;
  onClose: () => void;
}

const IncomeIcon = () => <Image src={incomeImg} maxW="20px" />;
const OutgoingIcon = () => <Image src={outcomeImg} maxW="20px" />;

export function EditTransactionModal({
  onClose,
  transaction,
}: TransactionModalProps) {
  const [title, setTitle] = useState(transaction.title);
  const [amount, setAmount] = useState(transaction.amount);
  const [category, setCategory] = useState(transaction.category);
  const [type, setType] = useState<"deposit" | "withdraw">(transaction.type);

  const buttonBg = useColorModeValue("white", "gray.700");
  const buttonBorderColor = useColorModeValue("gray.200", "gray.600");
  const buttonTextColor = useColorModeValue("gray.800", "gray.50");
  const [updateTransaction] = useMutation(UPDATE_TRANSACTION, {
    update(cache) {
      cache.modify({
        fields: {
          transactions() {
            cache.writeFragment({
              id: cache.identify((transaction as unknown) as StoreObject),
              fragment: gql`
                fragment MyTransaction on Transaction {
                  title
                  amount
                  category
                  type
                }
              `,
              data: {
                title,
                amount,
                category,
                type,
              },
            });
          },
        },
      });
    },
  });

  const handleSubmit = () => {
    const deviceId = localStorage.getItem("@Core/deviceId");

    updateTransaction({
      variables: {
        id: transaction.id,
        // deviceId,
        title,
        amount: Number(amount),
        category,
        type,
      },
    });

    onClose();
  };

  return (
    <Flex w="100" direction="column" p="12">
      <IconButton
        onClick={onClose}
        colorScheme="blackAlpha"
        aria-label="Close modal"
        position="absolute"
        right="8"
        top="5"
        icon={<FaTimes />}
      />

      <Text fontWeight="bold" mb="6" fontSize="larger">
        Update Transaction
      </Text>
      <Stack spacing={3}>
        <Input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          colorScheme="blackAlpha"
          placeholder="Name"
          py="6"
          fontSize="sm"
        />
        <Input
          onChange={(e) => setAmount(Number(e.target.value))}
          value={amount}
          colorScheme="blackAlpha"
          type="number"
          placeholder="Price"
          py="6"
          fontSize="sm"
        />
        <HStack w="100%">
          <Button
            bg={
              type === "deposit"
                ? transparentize(0.7, theme.colors.green[300])
                : buttonBg
            }
            color={buttonTextColor}
            border="1px solid"
            borderColor={buttonBorderColor}
            fontSize="small"
            fontWeight="normal"
            borderRadius="4"
            size="lg"
            flex="1"
            leftIcon={<Icon as={IncomeIcon} />}
            onClick={() => setType("deposit")}
          >
            Income
          </Button>
          <Button
            colorScheme="blackAlpha"
            color={buttonTextColor}
            border="1px solid"
            borderColor={buttonBorderColor}
            bg={
              type === "withdraw"
                ? transparentize(0.7, theme.colors.red[300])
                : buttonBg
            }
            fontSize="small"
            fontWeight="normal"
            borderRadius="4"
            size="lg"
            flex="1"
            onClick={() => setType("withdraw")}
            leftIcon={<Icon as={OutgoingIcon} />}
          >
            Outgoing
          </Button>
        </HStack>
        <Input
          onChange={(e) => setCategory(e.target.value)}
          value={category}
          colorScheme="blackAlpha"
          placeholder="Category"
          py="6"
          fontSize="sm"
        />
        <Button
          borderRadius="4"
          py="6"
          bg="green.300"
          colorScheme="green"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Stack>
    </Flex>
  );
}
