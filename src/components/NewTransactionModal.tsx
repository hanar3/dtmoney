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
} from "@chakra-ui/react";
import { useState } from "react";
import { transparentize } from "polished";
import { FaTimes } from "react-icons/fa";
import { useMutation, useQueryClient } from "react-query";
import incomeImg from "../assets/income.svg";
import outcomeImg from "../assets/outcome.svg";
import { api } from "../services/api";
interface TransactionModalProps {
  onClose: () => void;
}

interface TransactionCreate {
  title: string;
  amount: number;
  category: string;
  type: string;
}

const IncomeIcon = () => <Image src={incomeImg} maxW="20px" />;
const OutgoingIcon = () => <Image src={outcomeImg} maxW="20px" />;

export function NewTransactionModal({ onClose }: TransactionModalProps) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState<"deposit" | "withdraw">("deposit");
  const queryClient = useQueryClient();

  const mutation = useMutation(
    async (variables: TransactionCreate) =>
      await api.post("/transactions", variables),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("transactions");
      },
    }
  );

  const handleSubmit = () => {
    mutation.mutate({ title, amount: Number(amount), category, type });
  };

  return (
    <Flex w="100" direction="column" p="12">
      <IconButton
        onClick={onClose}
        bg="white"
        color="gray.400"
        aria-label="Close modal"
        position="absolute"
        right="8"
        top="5"
        icon={<FaTimes />}
      />

      <Text fontWeight="bold" mb="6" fontSize="larger">
        New Transaction
      </Text>
      <Stack spacing={3}>
        <Input
          onChange={(e) => setTitle(e.target.value)}
          bg="gray.100"
          placeholder="Name"
          py="6"
          fontSize="sm"
        />
        <Input
          onChange={(e) => setAmount(e.target.value)}
          bg="gray.100"
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
                : "white"
            }
            border="1px solid"
            borderColor="gray.200"
            fontSize="small"
            fontWeight="normal"
            borderRadius="4"
            size="lg"
            flex="1"
            leftIcon={<Icon as={IncomeIcon} />}
            onClick={() => setType("deposit")}
          >
            income
          </Button>
          <Button
            bg={
              type === "withdraw"
                ? transparentize(0.7, theme.colors.red[300])
                : "white"
            }
            border="1px solid"
            borderColor="gray.200"
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
          bg="gray.100"
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
