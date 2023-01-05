import { Flex, Heading, Image } from "@chakra-ui/react";
import { IMovie } from "../../../../../../typings";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import { getMovieImage } from "../../../../../utils/requests";
import Link from "next/link";

interface MovieSimilarProps {
  similar: IMovie[];
}

export function MovieSimilar({ similar }: MovieSimilarProps) {
  return (
    <Flex ml='15rem'>
      <Flex direction='column'>
        <Heading fontSize='2rem'>Filmes Similares</Heading>
        <Flex direction='column'>
          <Splide options={{ width: 600, perPage: 3, gap: "1rem" }}>
            {similar.map(({ id, poster_path, name }) => {
              return (
                <SplideSlide key={id}>
                  <Link href={`/movie/${id}`}>
                    <Flex maxW='100%' w='210px'>
                      <Image
                        src={getMovieImage(poster_path)}
                        alt={name}
                        borderRadius='8px'
                        bg='blue'
                        maxW='100%'
                      />
                      <Heading>{name}</Heading>
                    </Flex>
                  </Link>
                </SplideSlide>
              );
            })}
          </Splide>
        </Flex>
      </Flex>
    </Flex>
  );
}
