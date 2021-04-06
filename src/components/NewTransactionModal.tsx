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

  const buttonBg = useColorModeValue("white", "gray.700");
  const buttonBorderColor = useColorModeValue("gray.200", "gray.600");
  const buttonTextColor = useColorModeValue("gray.800", "gray.50");

  const mutation = useMutation(
    async (variables: TransactionCreate) =>
      await api.post("/transactions", variables),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("transactions");
        onClose();
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
        colorScheme="blackAlpha"
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
          colorScheme="blackAlpha"
          placeholder="Name"
          py="6"
          fontSize="sm"
        />
        <Input
          onChange={(e) => setAmount(e.target.value)}
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
