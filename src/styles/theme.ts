import { extendTheme } from "@chakra-ui/react";
import { useSwitchTheme } from "../hooks/useSwitchTheme";

export const theme = extendTheme({
  styles: {
    global: {
      body: {},
    },
  },
  colors: {
    "blue.900": "#3577ff",
    "blue.500": "#2b2d42",
    "white.900": "#ffffff",
    "gray.700": "#d3d5f3",
    "gray.300": "#838186",
  },
  fonts: {
    heading: "Overpass",
    body: "Overpass",
  },
  config: {
    initialColorMode: "light",
    useSystemColorMode: true,
  },
});
