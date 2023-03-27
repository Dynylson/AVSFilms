import axios from "axios";

import { useEffect, useState } from "react";

import { useRouter } from "next/router";

import { Text, Flex, Button } from "@chakra-ui/react";

import { SearchMovieCard } from "./components/SearchMovieCard";
import { SearchTvShowCard } from "./components/SearchTvShowCard";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface SearchMoviesProps {
  searchByMovieOrTvShow: string;
}

interface MoviesProps {
  id: number;
  src: string;
  title: string;
  release_date: string;
  overview: string;
  poster_path: string;
}

export function SearchMovies({ searchByMovieOrTvShow }: SearchMoviesProps) {
  const [movies, setMovies] = useState<MoviesProps[]>([]);
  const [tvSeries, setTvSeries] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState<null | boolean>(null);

  const { query } = useRouter();
  const q = query.movie;

  const url =
    searchByMovieOrTvShow === "filmes"
      ? `https://api.themoviedb.org/3/search/movie?api_key=ee6c522f6ee1372ba637b097a93e6d60&query=${q}&language=pt-BR&page=${page}`
      : `https://api.themoviedb.org/3/search/tv?api_key=ee6c522f6ee1372ba637b097a93e6d60&query=${q}&language=pt-BR&page=${page}`;

  useEffect(() => {
    const fetchMoviesByQuery = async () => {
      setIsLoading(true);
      const response = await axios.get(url);
      if (url.includes("tv")) {
        setTvSeries(response.data.results);
      } else {
        setMovies(response.data.results);
      }
      setIsLoading(false);
    };
    fetchMoviesByQuery();
  }, [q, url, tvSeries]);

  useEffect(() => {
    setPage(1);
  }, [query]);

  function handleLoadMoreMovies() {
    setPage((state) => state + 1);
    window.scrollTo(0, 0);
  }

  return (
    <SkeletonTheme baseColor='#202020' highlightColor='#444'>
      <Flex gap='.3rem'>
        <Text fontSize='1.5rem' mb='1.3rem' ml={[".7rem", "0"]}>
          {movies.length > 0
            ? "Resultados para:"
            : "Nenhum resultado encontrado para: "}
        </Text>
        <Text
          display='inline'
          color='blue.900'
          fontWeight='bold'
          fontSize='1.5rem'
        >
          {query.movie}
        </Text>
      </Flex>
      <Flex direction='column'>
        {url.includes("https://api.themoviedb.org/3/search/movie")
          ? movies?.map(
              ({ id, title, poster_path, release_date, overview }) => {
                return (
                  <>
                    {!isLoading ? (
                      <SearchMovieCard
                        key={id}
                        id={id}
                        src={poster_path}
                        title={title}
                        release_date={release_date}
                        overview={overview}
                      />
                    ) : (
                      <Skeleton />
                    )}
                  </>
                );
              }
            )
          : tvSeries.map(
              ({ id, name, overview, first_air_date, poster_path }) => {
                return (
                  <>
                    <SearchTvShowCard
                      data={{ id, name, overview, first_air_date, poster_path }}
                    />
                  </>
                );
              }
            )}
      </Flex>
      {movies.length === 0 ? (
        <Text fontSize='1.5rem' mb='1.3rem' ml={[".7rem", "0"]}>
          Não há mais filmes 😢
        </Text>
      ) : (
        <Button alignSelf='start' mb='1rem' onClick={handleLoadMoreMovies}>
          Próxima página
        </Button>
      )}
    </SkeletonTheme>
  );
}
