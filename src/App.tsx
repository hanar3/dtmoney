import { ChakraProvider } from "@chakra-ui/react";
import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import theme from "./styles/theme";

export function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Dashboard />
    </ChakraProvider>
  );
}
