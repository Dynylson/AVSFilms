import { Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { RiH1 } from "react-icons/ri";
import { useAddMoviesList } from "../src/hooks/useAddMoviesList";
import { getMovieImage } from "../src/utils/requests";

export default function MinhaLista() {
  const { moviesList } = useAddMoviesList();

  // function handleRemoveMovieFromList() {
  //   const movieExists = moviesList.find((movie) => movie.title === title)
  // }

  return (
    <Flex
      maxW={1700}
      mx='auto'
      px='1rem'
      mt='3rem'
      flexDirection='column'
      gap='1rem'
      mb='1rem'
    >
      {moviesList.length === 0 ? (
        <Heading textAlign='center'>
          Você ainda não adicionou nenhum filmes à sua lista😢
        </Heading>
      ) : (
        <>
          <Heading textAlign='center' mt='1rem'>
            Minha Lista
          </Heading>

          {moviesList?.map((movie) => {
            return (
              <Flex key={movie.title} gap='1rem'>
                <Image
                  src={getMovieImage(movie.poster_path)}
                  alt={movie.title}
                  w='150px'
                  borderRadius='8px'
                />
                <Flex flexDirection='column'>
                  <Heading as='h2' fontSize='1.5rem'>
                    {movie.title}
                  </Heading>
                  <Text maxW='70ch'>{movie.overview}</Text>
                  <Button
                    alignSelf='end'
                    background='#c53030'
                    color='white'
                    _hover={{ background: "#9B2C2C" }}
                  >
                    Remover
                  </Button>
                </Flex>
              </Flex>
            );
          })}
        </>
      )}
    </Flex>
  );
}
