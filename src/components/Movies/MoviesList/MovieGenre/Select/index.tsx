import { Select } from "@chakra-ui/react";
import { useState } from "react";
import { useGenres } from "../../../../../hooks/useGenres";

export function SelectGenres() {
  const { genres, movieGenre, moviesCategoryByGenre } = useGenres();

  const [select, setSelect] = useState(genres[0]);

  // console.log(genres[0]);
  console.log(select);

  // return (
  //   // <Select
  //   //   placeholder='Selecione um gênero'
  //   //   size='md'
  //   //   alignSelf='start'
  //   //   mt='1rem'
  //   //   w='300px'
  //   //   ml={[".7rem", "6.3rem"]}
  //   //   value={select}
  //   //   onChange={({ target }) => console.log(target.value)}
  //   // >
  //   //   {genres?.map(({ name, id }) => (
  //   //     <option key={id} value={id}>
  //   //       {name}
  //   //     </option>
  //   //   ))}
  //   // </Select>
  // );
}
