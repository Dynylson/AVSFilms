import { Select, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { SearchMovies } from "../src/components/Search";

export default function Search() {
  const [selectValue, setSelectValue] = useState("filmes");

  return (
    <Flex direction='column' maxW={1700} mx='auto' mt='2rem'>
      <Select
        w='300px'
        mb='1rem'
        onChange={({ target }) => setSelectValue(target.value)}
      >
        <option value='filmes'>Filmes</option>
        <option value='series'>Séries</option>
      </Select>
      <SearchMovies searchByMovieOrTvShow={selectValue} />
    </Flex>
  );
}
