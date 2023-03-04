import { Box, ChakraProvider } from "@chakra-ui/react";
import { darkThemeStyle, theme } from "../src/styles/theme";

import type { AppProps } from "next/app";

import { Header } from "../src/components/Header";
import { FilmsContextProvider } from "../src/contexts/FilmsContext";
import { SkeletonTheme } from "react-loading-skeleton";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <FilmsContextProvider>
        <Header />
        <SkeletonTheme baseColor='#838186' highlightColor='#525252'>
          <Component {...pageProps} />
        </SkeletonTheme>
      </FilmsContextProvider>
    </ChakraProvider>
  );
}
