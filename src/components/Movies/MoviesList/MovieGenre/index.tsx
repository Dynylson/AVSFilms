import { useEffect, useState } from "react";
import { genre } from "../../../../../typings";
import { requests } from "../../../../utils/requests";
import { SelectGenres } from "./Select";

export function MovieGenre() {
  const [genres, setGenres] = useState<genre[]>([]);

  useEffect(() => {
    const fetchGenres = async () => {
      const response = await fetch(requests.genres);
      const data = await response.json();
      setGenres(data);
    };
    fetchGenres();
  }, []);
  console.log(genres);

  return <SelectGenres genres={genres.genres} />;
}
