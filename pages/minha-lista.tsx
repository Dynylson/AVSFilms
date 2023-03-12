import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { RiH1 } from "react-icons/ri";
import { useAddMoviesList } from "../src/hooks/useAddMoviesList";
import { getMovieImage } from "../src/utils/requests";

export default function MinhaLista() {
  const { moviesList } = useAddMoviesList();

  // function handleRemoveMovieFromList() {
  //   const movieExists = moviesList.find((movie) => movie.title === title)
  // }

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

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
                  maxW='140px'
                  borderRadius='8px'
                />
                <Flex
                  flexDirection='column'
                  justifyContent={["stretch", "space-between"]}
                  alignItems='start'
                  gap={[".5rem", "0rem"]}
                >
                  <Box>
                    <Heading as='h2' fontSize={["1.1rem", "1.5rem"]}>
                      {movie.title}
                    </Heading>
                    {isWideVersion && movie.overview ? (
                      <Text maxW='70ch' mt='.5rem'>
                        {movie.overview}
                      </Text>
                    ) : (
                      <Text>(Não possui sinopse ainda 😒)</Text>
                    )}
                  </Box>
                  <Button
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
