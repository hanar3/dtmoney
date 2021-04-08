import { ChakraProvider } from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";
import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

import theme from "./styles/theme";
import { ModalProvider } from "./providers/ModalProvider";
import { TransactionsProvider } from "./providers/TransactionsProvider";
import { useEffect } from "react";

const apolloClient = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
});

export function App() {
  useEffect(() => {
    if (!localStorage.getItem("@Core/deviceId")) {
      localStorage.setItem("@Core/deviceId", uuidv4());
    }
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <ApolloProvider client={apolloClient}>
        <ModalProvider>
          <TransactionsProvider>
            <Header />
            <Dashboard />
          </TransactionsProvider>
        </ModalProvider>
      </ApolloProvider>
    </ChakraProvider>
  );
}
