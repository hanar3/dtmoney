import { ChakraProvider } from "@chakra-ui/react";
import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";

import theme from "./styles/theme";
import { ModalProvider } from "./providers/ModalProvider";

export function App() {
  return (
    <ChakraProvider theme={theme}>
      <ModalProvider>
        <Header />
        <Dashboard />
      </ModalProvider>
    </ChakraProvider>
  );
}
