import { Flex, Heading, Text, Image, Box, Button } from "@chakra-ui/react";
import Link from "next/link";

import { AiFillStar } from "react-icons/ai";

import {
  IActor,
  IActorMovie,
} from "../../../../../../../../../../pages/actor/[id]";

import { useSearchMovieById } from "../../../../../../../../../hooks/useSearchMovieById";

import { getMovieImage } from "../../../../../../../../../utils/requests";

interface ActorCardProps {
  data: IActor;
  movies: IActorMovie[];
}

export function ActorCard({ data, movies }: ActorCardProps) {
  const { searchMovieById } = useSearchMovieById();

  const arrayMoviesReduced = movies?.filter((movie, index) => {
    return index < 20;
  });

  return (
    <>
      <Flex maxW={1700} mx='auto' mt='3rem' px='1rem'>
        <Flex
          direction={["column", "row"]}
          gap='2rem'
          alignItems={["center", "start"]}
        >
          <Image
            src={getMovieImage(data.profile_path)}
            alt={data.name}
            maxW='100%'
            borderRadius='6px'
            height='300px'
          />
          <Flex direction='column'>
            <Heading>
              {data.name} ({!data.deathday ? "Vivo" : "Morte: " + data.deathday}
              )
            </Heading>
            <Heading fontSize='1rem' mt='1rem'>
              Nascimento:
              <Text display='inline' fontWeight='normal'>
                {" "}
                {data.birthday} ({data.place_of_birth})
              </Text>
            </Heading>
            <Heading fontSize='1rem' mt='.3rem' mb='1rem'>
              Departamento:
              <Text display='inline' fontWeight='normal'>
                {" "}
                {data.known_for_department}
              </Text>
            </Heading>
            <Heading fontSize='1.5rem' mb='.5rem'>
              Biografia
            </Heading>
            <Text maxW='80ch' maxH='200px' style={{ overflowY: "scroll" }}>
              {data.biography}
            </Text>
            <Heading fontSize='1.5rem' mt='1rem' mb='1rem'>
              Conhecido(a) por
            </Heading>
            <Flex direction='column' gap='1rem'>
              {arrayMoviesReduced?.map((movie) => {
                return (
                  <Flex
                    key={movie.id}
                    gap='.5rem'
                    alignItems='center'
                    justifyContent='space-between'
                    borderBottom='1px solid #ccc'
                    py='1rem'
                  >
                    <Link href={`/movie/${movie.id}`}>
                      <Flex alignItems='center' gap='1rem'>
                        <Image
                          height='9.375rem'
                          src={getMovieImage(movie.poster_path)}
                          alt={movie.original_title}
                          borderRadius='8px'
                        />
                        <Box>
                          <Box _hover={{ color: "#ccc" }}>
                            <Text>{movie.original_title}</Text>
                            <Box fontSize='.9rem' color='#9e9e9e'>
                              <Text>{movie.character}</Text>
                              <Text>
                                {movie.media_type === "movie"
                                  ? "Filme"
                                  : "Série"}
                              </Text>
                            </Box>
                          </Box>
                          <Flex alignItems='center' gap='.3rem'>
                            <AiFillStar color='#e9d23d' />{" "}
                            <Text fontSize='.7rem'>
                              {Number(movie.vote_average).toFixed(1)}
                            </Text>
                          </Flex>
                        </Box>
                      </Flex>
                    </Link>
                    <Flex>
                      <Button>Mais</Button>
                    </Flex>
                  </Flex>
                );
              })}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
