import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../src/styles/theme";

import type { AppProps } from "next/app";

import { Header } from "../src/components/Header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
