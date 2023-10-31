import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useAddMoviesList } from "../src/hooks/useAddMoviesList";
import { getMovieImage } from "../src/utils/requests";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function MinhaLista() {
  const { moviesList, handleDeleteMovie } = useAddMoviesList();

  function handleRemoveMovieFromList(movieTitle: any) {
    const findMovie = moviesList.filter((movie) => movieTitle !== movie.title);
    handleDeleteMovie(findMovie);
    toast.error("Filme removido da lista!");
  }

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
          Você ainda não adicionou nenhum filme à sua lista😢
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
                      <Text maxW='100ch' mt='.5rem'>
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
                    onClick={() => handleRemoveMovieFromList(movie.title)}
                    mt='.5rem'
                  >
                    Remover
                  </Button>
                </Flex>
              </Flex>
            );
          })}
        </>
      )}
      <ToastContainer position='top-left' autoClose={1000} />
    </Flex>
  );
}
