import { extendTheme } from "@chakra-ui/react";
import { useSwitchTheme } from "../hooks/useSwitchTheme";

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        background: "#edf5f0",
      },
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
    initialColorMode: "dark",
  },
});

export const darkThemeStyle = extendTheme({
  styles: {
    global: {
      body: {
        background: "#222831",
      },
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
});
