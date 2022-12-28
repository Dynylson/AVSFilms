import { useEffect, useState } from "react";

import { Heading, Flex } from "@chakra-ui/react";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import { MovieCard } from "../MovieCard";

interface MovieCharacteristics {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
}

interface Movie {
  title: string;
  backdrop_path: string;
  media_type?: string;
  release_date?: string;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
}

interface MovieProps {
  fetch: Movie[];
  category: string;
}

export function MoviesList({ fetch, category }: MovieProps) {
  return (
    <Flex maxW={1700} mx='auto' ml={[".7rem", "auto"]} overflow='hidden'>
      <Flex direction='column'>
        <Heading
          color='gray.300'
          fontSize={["1.7rem", "2.25rem"]}
          mt='4rem'
          mb='2rem'
        >
          {category}
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
          {fetch?.map(
            ({
              id,
              title,
              poster_path,
              vote_average,
            }: MovieCharacteristics) => (
              <SplideSlide key={id}>
                <MovieCard
                  src={poster_path}
                  title={title}
                  alt={title}
                  id={id}
                  vote_average={vote_average}
                />
              </SplideSlide>
            )
          )}
        </Splide>
      </Flex>
    </Flex>
  );
}
