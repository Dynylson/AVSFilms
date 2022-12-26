import { Text, Flex } from "@chakra-ui/react";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { SearchMovieCard } from "./SearchMovieCard";
import axios from "axios";

export function SearchMovies() {
  const [movies, setMovies] = useState([]);

  const { query } = useRouter();
  const q = query.movie;

  useEffect(() => {
    const fetchMoviesByQuery = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=ee6c522f6ee1372ba637b097a93e6d60&query=${q}&language=pt-BR`
      );
      console.log(response);
      setMovies(response.data.results);
    };
    fetchMoviesByQuery();
  }, [q]);

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
            <SearchMovieCard
              key={id}
              id={id}
              src={poster_path}
              title={title}
              release_date={release_date}
              overview={overview}
            />
          );
        })}
      </Flex>
    </Flex>
  );
}
