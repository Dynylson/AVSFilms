import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { useTvShowData } from "../../hooks/useTvShowData";
import { getBannerImage, getMovieImage } from "../../utils/requests";
import { ButtonList } from "../ButtonList";
import { TvShowActors } from "../TvShowActors";

interface TvShowGenre {
  id: number;
  name: string;
}

interface ITvShow {
  name: string;
  poster_path: string;
  backdrop_path: string;
  genres: TvShowGenre[];
  overview: string;
  episode_run_time: number[];
}

export interface ITvShowActors {
  name: string;
  profile_path: string;
  character: string;
  credit_id: string;
  gender: number;
  id: number;
  known_for_department: string;
  order: number;
  original_name: string;
  popularity: number;
  adult: boolean;
  cast_id: number;
}

export function TvPage() {
  const { query } = useRouter();
  const { id } = query;

  const { SearchTvShowByQuery } = useTvShowData();

  const [tvShow, setTvShow] = useState({} as ITvShow);
  const [tvShowActors, setTvShowActors] = useState<ITvShowActors[]>([]);

  const urlActors = `https://api.themoviedb.org/3/tv/${id}/aggregate_credits?api_key=ee6c522f6ee1372ba637b097a93e6d60`;

  useEffect(() => {
    const dataTvShow = async () => {
      const data = await SearchTvShowByQuery(id);

      const responseActors = await fetch(urlActors);
      const dataActors = await responseActors.json();

      setTvShow(data);
      setTvShowActors(dataActors.cast);
    };
    dataTvShow();
  }, [SearchTvShowByQuery, id, urlActors]);

  return (
    <>
      <Box
        backgroundImage={getBannerImage(tvShow.backdrop_path)}
        backgroundRepeat='no-repeat'
        backgroundSize='cover'
        height='600px'
      >
        <Flex
          maxW='100%'
          h='600px'
          mx='auto'
          px='3rem'
          backgroundColor='rgba(0, 0, 0, .3)'
        >
          <Flex gap='1rem' mt='3rem' alignItems='center' p='1rem'>
            <Image
              src={getMovieImage(tvShow.poster_path)}
              minW={["150px", "300px"]}
              minH={["150px", "300px"]}
              borderRadius='12px'
              alt={tvShow.name}
            />
            <Flex direction='column' gap='1rem'>
              <Heading fontSize={["1rem", "2rem"]} color='white'>
                {tvShow.name}
              </Heading>
              <Flex gap='.5rem'>
                {tvShow?.genres?.map((genre) => {
                  return (
                    <Text
                      key={genre.id}
                      border='1px solid white'
                      color='white'
                      p='.5rem'
                    >
                      {genre.name}
                    </Text>
                  );
                })}
              </Flex>
              <ButtonList
                w='10rem'
                title={tvShow.name}
                poster_path={tvShow.poster_path}
                overview={tvShow.overview}
              />
              <Box>
                <Heading as='h3' fontSize='1.2rem' color='white'>
                  Sinopse
                </Heading>
                <Text color='white' maxW='80ch'>
                  {tvShow.overview}
                </Text>
              </Box>
            </Flex>
          </Flex>
        </Flex>
      </Box>
      <Heading maxW={1700} mx='auto' pl='1rem' mt='2rem'>
        Elenco
      </Heading>
      <Flex maxW={1700} mx='auto' px='1rem' mt='3rem'>
        <TvShowActors actors={tvShowActors} />
      </Flex>
    </>
  );
}
