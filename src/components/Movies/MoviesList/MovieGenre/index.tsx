import { useEffect, useState } from "react";
import { genre, genres } from "../../../../../typings";
import { requests } from "../../../../utils/requests";
import { SelectGenres } from "./Select";

export function MovieGenre() {
  const [genres, setGenres] = useState<genre[]>([]);

  useEffect(() => {
    const fetchGenres = async () => {
      const response = await fetch(requests.genres);
      const genres = await response.json();
      setGenres(genres.genres);
    };
    fetchGenres();
  }, []);
  console.log(genres);

  return <SelectGenres genres={genres} />;
}
