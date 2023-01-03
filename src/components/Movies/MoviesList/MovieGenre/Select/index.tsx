import { Select } from "@chakra-ui/react";
import { genre } from "../../../../../../typings";

interface SelectGenresProps {
  genres: genre[];
}

export function SelectGenres({ genres }: SelectGenresProps) {
  console.log(genres);
  return (
    <Select placeholder='Selecione um gênero'>
      {genres?.map(({ name, id }) => (
        <option key={id} value={name}>
          {name}
        </option>
      ))}
    </Select>
  );
}
