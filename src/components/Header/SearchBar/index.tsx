import { Flex, Button, Input } from "@chakra-ui/react";

import { AiOutlineSearch } from "react-icons/ai";

export function SearchBar() {
  return (
    <>
      <Button variant='unstyled' my={[".8rem", null]}>
        <Flex alignItems='center' gap='10px' cursor='pointer'>
          <Flex
            alignItems='center'
            color='white.900'
            _hover={{ color: "#e1dcdc" }}
            gap='10px'
          >
            <Input placeholder='Busque algum filme...' />
            <AiOutlineSearch size={30} color='white.900' />
          </Flex>
        </Flex>
      </Button>
    </>
  );
}
