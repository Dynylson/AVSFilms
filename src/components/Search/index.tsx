import { Text, Flex } from "@chakra-ui/react";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import { SearchMovieCard } from "./SearchMovieCard";

export function SearchMovies() {
  const [movies, setMovies] = useState([]);

  const { query } = useRouter();
  const q = query.movie;

  useEffect(() => {
    const fetchMoviesByQuery = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=ee6c522f6ee1372ba637b097a93e6d60&query=${q}`
      );
      setMovies(response.data.results);
    };
    fetchMoviesByQuery();
  }, [query]);
  console.log(movies);

  return (
    <Flex maxW={1700} mx='auto' mt='2rem'>
      <Flex gap='.3rem'>
        <Text fontSize='1.5rem'>Resultados para: </Text>
        <Text
          display='inline'
          color='blue.900'
          fontWeight='bold'
          fontSize='1.5rem'
        >
          {query.movie}
        </Text>
      </Flex>
      <Flex>
        {movies?.map(({ id, title, poster_path }) => {
          return <SearchMovieCard key={id} src={poster_path} title={title} />;
        })}
      </Flex>
    </Flex>
  );
}
