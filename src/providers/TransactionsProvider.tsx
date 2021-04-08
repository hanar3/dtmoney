import { createContext, ReactNode, useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { LIST_TRANSACTIONS } from "../queries/transactions";

interface ITransaction {
  id: string;
  title: string;
  type: "deposit" | "withdraw";
  amount: number;
  category: string;
  createdAt: string;
}

interface TransactionContextOptions {
  transactions: Array<ITransaction>;
  isLoading: boolean;
  error: unknown;
}

export const TransactionContext = createContext(
  {} as TransactionContextOptions
);

interface TransactionProviderProps {
  children: ReactNode;
}

export function TransactionsProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<ITransaction[]>([]);
  const deviceId = localStorage.getItem("@Core/deviceId");

  const { loading, error, data } = useQuery(LIST_TRANSACTIONS, {
    variables: { deviceId },
  });

  useEffect(() => {
    if (data) {
      setTransactions(data?.transactions);
    }
  }, [data]);

  return (
    <TransactionContext.Provider
      value={{ transactions, isLoading: loading, error }}
    >
      {children}
    </TransactionContext.Provider>
  );
}
