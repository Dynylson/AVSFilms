import { Flex, Button, Input } from "@chakra-ui/react";
import { useState } from "react";

import { AiOutlineSearch } from "react-icons/ai";

import { useRouter } from "next/router";

export function SearchBar() {
  const [search, setSearch] = useState("");

  const router = useRouter();

  function onSubmit() {
    if (!search) return;

    router.push({ pathname: "/search", query: search });
  }

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
            <Input
              placeholder='Busque algum filme...'
              value={search}
              onChange={({ target }) => setSearch(target.value)}
            />
            <AiOutlineSearch size={30} color='white.900' onClick={onSubmit} />
          </Flex>
        </Flex>
      </Button>
    </>
  );
}
