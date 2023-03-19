import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useTvShowData } from "../../src/hooks/useTvShowData";

import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

import { getMovieImage, getBannerImage } from "../../src/utils/requests";

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
      <Flex maxW={1500} mx='auto' px='3rem'>
        <Flex
          gap='1rem'
          mt='3rem'
          alignItems='center'
          backgroundColor='rgba(0, 0, 0, .3)'
          p='1rem'
        >
          <Image
            src={getMovieImage(tvShow.poster_path)}
            minW='300px'
            minH='300px'
            borderRadius='12px'
            alt={tvShow.name}
          />
          <Flex direction='column' gap='1rem'>
            <Heading fontSize='2rem'>{tvShow.name}</Heading>
            <Flex>
              {tvShow?.genres?.map((genre) => {
                return <Text key={genre.id}>{genre.name}</Text>;
              })}
            </Flex>
            <Box>
              <Heading as='h3' fontSize='1.2rem'>
                Sinopse
              </Heading>
              <Text>{tvShow.overview}</Text>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
