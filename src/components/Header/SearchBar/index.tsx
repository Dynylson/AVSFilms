import { Flex, Text, Button } from "@chakra-ui/react";

import { AiOutlineSearch } from "react-icons/ai";

export function SearchBar() {
  return (
    <>
      <Button variant='unstyled'>
        <Flex alignItems='center' gap='10px' cursor='pointer'>
          <Flex
            alignItems='center'
            color='white.900'
            _hover={{ color: "#e1dcdc" }}
            gap='10px'
          >
            <AiOutlineSearch size={30} color='white.900' />
            <Text>Pesquise qualquer filme clicando aqui!</Text>
          </Flex>
        </Flex>
      </Button>
    </>
  );
}
