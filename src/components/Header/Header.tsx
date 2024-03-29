import { Flex, Text, Box } from "@chakra-ui/react";

import { LoginAndSignUp } from "./components/LoginAndSignUp";
import { SearchBar } from "./components/SearchBar";

import Link from "next/link";

export function Header() {
  return (
    <Box bg={"blue.500"}>
      <Box w='100%'>
        <Flex
          direction={["column", "row"]}
          maxW={1700}
          mx='auto'
          py='1.3rem'
          px='1rem'
          justifyContent='space-between'
          alignItems='center'
        >
          <Link href='/'>
            <Flex>
              <Text color='white.900' fontSize='2.25rem' fontWeight='bold'>
                AVS
              </Text>
              <Text
                display='inline'
                color='blue.900'
                fontSize='2.25rem'
                fontWeight='bold'
              >
                Films
              </Text>
            </Flex>
          </Link>
          <SearchBar />
          <LoginAndSignUp />
        </Flex>
      </Box>
    </Box>
  );
}
