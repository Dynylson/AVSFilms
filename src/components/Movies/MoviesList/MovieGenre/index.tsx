import { useEffect, useState } from "react";
import { requests } from "../../../../utils/requests";

interface genres {
  id: number;
  name: string;
}

export function MovieGenre() {
  const [genres, setGenres] = useState<genres[]>([]);

  useEffect(() => {
    const fetchGenres = async () => {
      const response = await fetch(requests.genres);
      const data = await response.json();
      setGenres(data);
    };
    fetchGenres();
  }, []);
  console.log(genres);

  return <h1>Hello World!</h1>;
}
