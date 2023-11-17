import { ButtonList } from "../ButtonList";
import { MovieProps } from "../Movies/components/MoviesList/components/MovieDetails/MovieDetails";
import { Box, Flex, Image, Heading, Text } from "@chakra-ui/react";
import { RatingForm } from "../RatingForm";
import { getBannerImage } from "../../utils/requests";
import { TvShowActors } from "../TvShowActors";

export function MoviePage({
    id,
  poster_path,
  alt,
  title,
  genres,
  overview,
  production_companies,
  trailer,
  actors,
  similar,
  vote_average,
  backdrop_path
}: MovieProps) {
    const getPosterURL = (posterpath: string) => {
        return `https://www.themoviedb.org/t/p/w220_and_h330_face${posterpath}`;
      };

      console.log(poster_path)

    return (
        <>
          <Box
            backgroundImage={getBannerImage(backdrop_path)}
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
                  src={getPosterURL(poster_path)}
                  minW={["150px", "300px"]}
                  minH={["150px", "300px"]}
                  borderRadius='12px'
                  alt={title}
                />
                <Flex direction='column' gap='1rem'>
                  <Heading fontSize={["1rem", "2rem"]} color='white'>
                    {title}
                  </Heading>
                  <Flex gap='.5rem'>
                    {genres?.map((genre) => {
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
                  <Flex gap=".3rem">
                    <ButtonList
                      w='10rem'
                      title={title}
                      poster_path={poster_path}
                      overview={overview}
                    />
                    <RatingForm movieId={id} />
                  </Flex>
                  <Box>
                    <Heading as='h3' fontSize='1.2rem' color='white'>
                      Sinopse
                    </Heading>
                    <Text color='white' maxW='80ch'>
                      {overview}
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
            <TvShowActors actors={actors} />
          </Flex>
        </>
      );
}