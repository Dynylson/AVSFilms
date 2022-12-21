import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    dark: {
      background: "#2b2d42",
      text: "#838186",
    },
    light: {
      background: "#EDF1F5",
      "white.900": "#ffffff",
      "gray.700": "#d3d5f3",
    },
  },
  fonts: {
    regular: 400,
    bold: 700,
  },
});
