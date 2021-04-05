import { extendTheme } from "@chakra-ui/react";

export default extendTheme({
  config: {
    initialColorMode: "light",
  },

  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },

  colors: {
    red: {
      500: "#E52E4D",
    },
    blue: {
      300: "#6933FF",
      500: "#5429cc",
    },
  },

  styles: {
    global: (props) => ({
      bg: props.colorMode === "light" ? "#F0F0F5" : "gray.900",
      button: {
        cursor: "pointer",
      },
    }),
  },
});
