import { Text, Flex, Button } from "@chakra-ui/react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { SearchMovieCard } from "./SearchMovieCard";
import axios from "axios";
import { useScrollToTop } from "../../hooks/useScrollToTop";

interface MoviesProps {
  id: number;
  src: string;
  title: string;
  release_date: string;
  overview: string;
  poster_path: string;
}

export function SearchMovies() {
  const [movies, setMovies] = useState<MoviesProps[]>([]);
  const [page, setPage] = useState(1);

  const { query } = useRouter();
  const q = query.movie;

  const url = `https://api.themoviedb.org/3/search/movie?api_key=ee6c522f6ee1372ba637b097a93e6d60&query=${q}&language=pt-BR&page=${page}`;

  useEffect(() => {
    const fetchMoviesByQuery = async () => {
      const response = await axios.get(url);
      console.log(response);
      setMovies(response.data.results);
    };
    fetchMoviesByQuery();
  }, [q, url]);
  console.log(movies);

  useEffect(() => {
    setPage(1);
  }, [query]);

  function handleLoadMoreMovies() {
    setPage((state) => state + 1);
    window.scrollTo(0, 0);
  }
  console.log(page);

  return (
    <Flex direction='column' maxW={1700} mx='auto' mt='2rem'>
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
        {movies?.map(({ id, title, poster_path, release_date, overview }) => {
          return (
            <>
              {(
                <SearchMovieCard
                  key={id}
                  id={id}
                  src={poster_path}
                  title={title}
                  release_date={release_date}
                  overview={overview}
                />
              ) || <Skeleton count={5} />}
            </>
          );
        })}
      </Flex>
      {movies.length === 0 ? (
        <p>nao tem mais filmes</p>
      ) : (
        <Button alignSelf='start' mb='1rem' onClick={handleLoadMoreMovies}>
          Próxima página
        </Button>
      )}
    </Flex>
  );
}
