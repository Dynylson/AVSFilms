import {
  Box,
  Flex,
  Heading,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";
import { IMovie } from "../../../../../../typings";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import { getMovieImage } from "../../../../../utils/requests";
import Link from "next/link";

interface MovieSimilarProps {
  similar: IMovie[];
}

export function MovieSimilar({ similar }: MovieSimilarProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <>
      {isWideVersion && (
        <Box ml='15rem'>
          <Heading fontSize='2rem'>Filmes Similares</Heading>
          <Flex direction='column'>
            <Splide
              options={{
                width: 600,
                perPage: 3,
                gap: "1rem",
                arrows: false,
                pagination: false,
              }}
            >
              {similar?.map(({ id, poster_path, name }) => {
                return (
                  <SplideSlide key={id}>
                    <Link href={`/movie/${id}`}>
                      <Flex maxW='100%' w='210px'>
                        <Box>
                          <Image
                            src={getMovieImage(poster_path)}
                            alt={name}
                            borderRadius='8px'
                            bg='blue'
                            maxW='100%'
                          />
                          <Heading>{name}</Heading>
                        </Box>
                      </Flex>
                    </Link>
                  </SplideSlide>
                );
              })}
            </Splide>
          </Flex>
        </Box>
      )}
    </>
  );
}
