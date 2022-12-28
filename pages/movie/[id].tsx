import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { api } from "../api/api";
import { MovieDetails } from "../../src/components/Movies/MovieDetails";

interface genre {
  id: number;
  name: string;
}

interface productionCompany {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

interface MovieProps {
  adult: boolean;
  title: string;
  poster_path: string;
  alt: string;
  genres: genre[];
  overview: string;
  productionCompanies: productionCompany[];
}

export default function Movie() {
  const [movie, setMovie] = useState({} as MovieProps);

  const { query } = useRouter();
  const { id } = query;

  useEffect(() => {
    const fetchMovieById = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=ee6c522f6ee1372ba637b097a93e6d60&language=pt-BR`
      );
      const data = await response.json();
      setMovie(data);
      console.log(data);
    };
    fetchMovieById();
  }, []);

  return (
    <MovieDetails
      poster_path={movie.poster_path}
      title={movie.title}
      alt={movie.title}
      genres={movie.genres}
      overview={movie.overview}
      productionCompanies={movie.productionCompanies}
    />
  );
}
