import { TransactionContext } from "../providers/TransactionsProvider";
import { useContext } from "react";

export function useTransactions() {
  const context = useContext(TransactionContext);
  if (!context)
    throw new Error(
      "useTransactions has to be used within a TransactionsProvider"
    );
  return context;
}
