import { createContext, ReactNode, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { api } from "../services/api";

interface ITransaction {
  id: number;
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
  const { isLoading, data, error } = useQuery("transactions", async () =>
    api.get<{ transactions: ITransaction[] }>("/transactions")
  );
  useEffect(() => {
    if (data) {
      setTransactions(data?.data.transactions);
    }
  }, [data]);

  return (
    <TransactionContext.Provider value={{ transactions, isLoading, error }}>
      {children}
    </TransactionContext.Provider>
  );
}
