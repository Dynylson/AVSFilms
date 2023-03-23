import { Flex, Heading, Text, Image } from "@chakra-ui/react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { IActor, IActorMovie } from "../../../../../../../pages/actor/[id]";
import { getMovieImage } from "../../../../../../utils/requests";

interface ActorCardProps {
  data: IActor;
  movies: IActorMovie[];
}

export function ActorCard({ data, movies }: ActorCardProps) {
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
            <Text maxW='60ch'>{data.biography}</Text>
            <Heading fontSize='1.5rem' mt='1rem'>
              Conhecido(a) por
            </Heading>

            <Swiper>
              {movies?.map((movie) => {
                return (
                  <SwiperSlide key={movie.id}>
                    <Flex direction='column'>
                      <Image
                        src={getMovieImage(movie.poster_path)}
                        alt={movie.original_title}
                      />
                      <Text alignSelf='center'>{movie.original_title}</Text>
                    </Flex>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
