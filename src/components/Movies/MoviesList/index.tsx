import axios from "axios";
import { useEffect, useState } from "react";

export function MoviesList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const { data } = await axios.get(
        "https://api.themoviedb.org/3/movie/popular?api_key=ee6c522f6ee1372ba637b097a93e6d60&language=pt-BR&page=1"
      );
      console.log(data);
      setMovies(data.results);
    };
    fetchMovies();
  }, []);

  return <>{movies.map((movie) => console.log(movie))}</>;
}
