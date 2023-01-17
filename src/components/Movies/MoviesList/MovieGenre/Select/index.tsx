import { Select } from "@chakra-ui/react";
import { useState } from "react";
import { genre } from "../../../../../../typings";

interface SelectGenresProps {
  genres: genre[];
}

export function SelectGenres({ genres }: SelectGenresProps) {
  const [select, setSelect] = useState("");
  console.log(select);

  return (
    <Select
      placeholder='Selecione um gênero'
      size='md'
      alignSelf='start'
      mt='1rem'
      w='300px'
      ml={[".7rem", "6.3rem"]}
      value={select}
      onChange={({ target }) => setSelect(target.value)}
    >
      {genres?.map(({ name, id }) => (
        <option key={id} value={name}>
          {name}
        </option>
      ))}
    </Select>
  );
}
