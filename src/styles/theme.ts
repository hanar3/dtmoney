import { extendTheme } from "@chakra-ui/react";

export default extendTheme({
  config: {
    useSystemColorMode: true,
  },

  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },

  colors: {
    green: {
      300: "#33CC95",
    },
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
      body: {
        bg: props.colorMode === "dark" ? "gray.800" : "#E5E5E5",
        button: {
          cursor: "pointer",
        },
      },
    }),
  },
});
