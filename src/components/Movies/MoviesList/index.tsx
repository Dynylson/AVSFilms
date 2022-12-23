import { useEffect, useState } from "react";

import { Heading, Flex } from "@chakra-ui/react";

import axios from "axios";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import { MovieCard } from "../MovieCard";

export function MoviesList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const { data } = await axios.get(
        "https://api.themoviedb.org/3/movie/popular?api_key=ee6c522f6ee1372ba637b097a93e6d60&language=pt-BR&page=1"
      );
      console.log(data.results);
      setMovies(data.results);
    };
    fetchMovies();
  }, []);

  return (
    <Flex maxW={1700} mx='auto' ml={[".7rem", "auto"]} overflow='hidden'>
      <Flex direction='column'>
        <Heading
          color='gray.300'
          fontSize={["1.7rem", "2.25rem"]}
          mt='4rem'
          mb='2rem'
        >
          Filmes em Alta
        </Heading>
        <Splide
          options={{
            perPage: 9,
            perMove: 3,
            drag: "free",
            gap: ".5rem",
            arrows: false,
            pagination: false,
          }}
        >
          {movies?.map(({ id, title, poster_path }) => (
            <SplideSlide key={id}>
              <MovieCard src={poster_path} title={title} alt={title} />
            </SplideSlide>
          ))}
        </Splide>
      </Flex>
    </Flex>
  );
}
