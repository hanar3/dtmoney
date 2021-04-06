import { ChakraProvider } from "@chakra-ui/react";
import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { QueryClient, QueryClientProvider } from "react-query";

import theme from "./styles/theme";
import { ModalProvider } from "./providers/ModalProvider";
import { TransactionsProvider } from "./providers/TransactionsProvider";

const queryClient = new QueryClient();

export function App() {
  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <ModalProvider>
          <TransactionsProvider>
            <Header />
            <Dashboard />
          </TransactionsProvider>
        </ModalProvider>
      </QueryClientProvider>
    </ChakraProvider>
  );
}
