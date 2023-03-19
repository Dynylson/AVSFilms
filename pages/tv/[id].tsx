import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useTvShowData } from "../../src/hooks/useTvShowData";

import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

import { getMovieImage, getBannerImage } from "../../src/utils/requests";
import { ButtonList } from "../../src/components/ButtonList";

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

export default function Tv() {
  const { query } = useRouter();
  const { id } = query;

  const { SearchTvShowByQuery } = useTvShowData();

  const [tvShow, setTvShow] = useState({} as ITvShow);

  useEffect(() => {
    const dataTvShow = async () => {
      const data = await SearchTvShowByQuery(id);
      setTvShow(data);
    };
    dataTvShow();
  }, [SearchTvShowByQuery, id]);

  return (
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
            minW='300px'
            minH='300px'
            borderRadius='12px'
            alt={tvShow.name}
          />
          <Flex direction='column' gap='1rem'>
            <Heading fontSize='2rem' color='white'>
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
  );
}
