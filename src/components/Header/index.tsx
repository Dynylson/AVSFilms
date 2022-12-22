import { Flex, Text, Box } from "@chakra-ui/react";
import { LoginAndSignUp } from "./LoginAndSignUp";
import { SearchBar } from "./SearchBar";

export function Header() {
  return (
    <Box bg={"blue.500"} w='100%'>
      <Flex
        direction={["column", "row"]}
        maxW={1700}
        mx='auto'
        py='1.3rem'
        justifyContent='space-between'
        alignItems='center'
      >
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
        <SearchBar />
        <LoginAndSignUp />
      </Flex>
    </Box>
  );
}
