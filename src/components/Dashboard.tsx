import { Flex } from "@chakra-ui/react";
import { Summary } from "./Summary";

export function Dashboard() {
  return (
    <Flex as="main" maxW="1120px" margin="0 auto" padding="2.5rem 1rem">
      <Summary />
    </Flex>
  );
}
