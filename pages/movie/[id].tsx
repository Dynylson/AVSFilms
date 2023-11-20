import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { MovieDetails } from "../../src/components/Movies/components/MoviesList/components/MovieDetails";

import { Spinner, Flex } from "@chakra-ui/react";
import { IActor, IMovie, trailer } from "../../src/@types/typings";
// import { TvShowPageLayout } from "../../src/components/Header/components/TvShowPageLayout";
import { MoviePage } from "../../src/components/MoviePage";

interface TrailerProps {
  id: number;
  results: trailer[];
}

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
  backdrop_path: string;
  alt: string;
  genres: genre[];
  overview: string;
  production_companies: productionCompany[];
  vote_average: number;
}

export default function Movie() {
  const [movie, setMovie] = useState({} as MovieProps);
  const [trailer, setTrailer] = useState({} as TrailerProps);
  const [actors, setActors] = useState<IActor[]>([]);
  const [similar, setSimilar] = useState<IMovie[]>([]);

  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCarregando(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  const [loading, setLoading] = useState(true);

  const { query } = useRouter();
  const { id } = query;

  useEffect(() => {
    const fetchMovieById = async () => {
      const responseMovie = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=ee6c522f6ee1372ba637b097a93e6d60&language=pt-BR`
      );
      const responseTrailer = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=ee6c522f6ee1372ba637b097a93e6d60&language=pt-BR`
      );
      const responseActors = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=ee6c522f6ee1372ba637b097a93e6d60`
      );
      const responseSimilar = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/similar?api_key=ee6c522f6ee1372ba637b097a93e6d60&language=en-US&page=1`
      );
      const dataMovie = await responseMovie.json();
      const dataTrailer = await responseTrailer.json();
      const dataActors = await responseActors.json();
      const dataSimilar = await responseSimilar.json();

      setMovie(dataMovie);
      setTrailer(dataTrailer);
      setActors(dataActors.cast);
      setSimilar(dataSimilar.results);

      setLoading(false);
    };
    fetchMovieById();
  }, [id]);

  return (
    <>
      {carregando ? (
        <Flex w='100vw' h='80vh' alignItems='center' justifyContent='center'>
          <Spinner size='lg' />
        </Flex>
      ) : (
        <>
          {/* <MovieDetails
            id={id}
            poster_path={movie.poster_path}
            title={movie.title}
            alt={movie.title}
            vote_average={movie.vote_average}
            genres={movie.genres}
            overview={movie.overview}
            production_companies={movie.production_companies}
            trailer={trailer}
            actors={actors}
            similar={similar}
            loading={loading}
          /> */}
          <MoviePage
          id={id}
          poster_path={movie.poster_path}
          backdrop_path={movie.backdrop_path}
          title={movie.title}
          alt={movie.title}
          vote_average={movie.vote_average}
          genres={movie.genres}
          overview={movie.overview}
          production_companies={movie.production_companies}
          trailer={trailer}
          actors={actors}
          similar={similar}
          loading={loading} />
          {/* <TvShowPageLayout /> */}
        </>
      )}
    </>
  );
}