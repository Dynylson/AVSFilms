import {
  Heading,
  Flex,
  Image,
  Text,
  AspectRatio,
  Button,
} from "@chakra-ui/react";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { TrailerProps, IActor, IMovie } from "../../../../../../@types/typings";
import { useAddMoviesList } from "../../../../../../hooks/useAddMoviesList";
import { ButtonList } from "../../../../../ButtonList";
import { Actors } from "./components/Actors";
import { MovieSimilar } from "./components/MovieSimilar";

interface genre {
  id: number;
  name: string;
}

interface productionCompany {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

interface MovieProps {
  poster_path: string;
  alt: string;
  title: string;
  vote_average: number;
  genres: genre[];
  overview: string;
  production_companies: productionCompany[];
  trailer: TrailerProps;
  actors: IActor[];
  similar: IMovie[];
  loading: boolean;
}

export function MovieDetails({
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
}: MovieProps) {
  const getPosterURL = (posterpath: string) => {
    return `https://www.themoviedb.org/t/p/w220_and_h330_face${posterpath}`;
  };

  const findTrailer = trailer.results?.find((trailer) => {
    return trailer.type == "Trailer";
  });

  const { addMovieToList, moviesList } = useAddMoviesList();

  function handleAddMoviesToList() {
    const movieAlreadyExists = moviesList.find((movie) => {
      return movie.title === title;
    });
    if (!movieAlreadyExists) addMovieToList({ title, poster_path, overview });
    toast.success("Filme adicionado à lista!");
  }

  return (
    <>
      <Flex maxW={1700} mx='auto' mt='3rem' px='1rem'>
        <Flex
          direction={["column", "row"]}
          gap='2rem'
          alignItems={["center", "start"]}
        >
          {(
            <Image
              src={getPosterURL(poster_path)}
              alt={alt}
              maxW='100%'
              borderRadius='6px'
              height='300px'
            />
          ) || <Skeleton />}
          <Flex direction='column' ml={[".7rem", "auto"]}>
            <Flex alignItems='center' gap='.5rem'>
              <Heading>{title}</Heading>
            </Flex>
            <Flex gap='1rem' flexWrap='wrap'>
              {genres?.map((genre) => {
                return (
                  <Text
                    key={genre.id}
                    border='1px solid #838186'
                    borderRadius='8px'
                    p='.5rem'
                  >
                    {genre.name}
                  </Text>
                );
              })}
              <ButtonList
                title={title}
                overview={overview}
                poster_path={poster_path}
              />
            </Flex>
            <Heading mt='3rem' fontSize='1.5rem'>
              Sinopse
            </Heading>
            {overview ? (
              <Text maxW='65ch'>{overview}</Text>
            ) : (
              <Text>(Não possui sinopse ainda 😒)</Text>
            )}

            <Heading mt='3rem' fontSize='1.5rem'>
              Trailer
            </Heading>
            <AspectRatio
              border='5px solid #838186'
              borderRadius='8px'
              mr='1rem'
            >
              <iframe
                title={title}
                src={`https://www.youtube.com/embed/${findTrailer?.key}`}
                height='100px'
                width='100%'
              ></iframe>
            </AspectRatio>
            <Heading mt='3rem' fontSize='1.5rem'>
              Produtoras
            </Heading>
            <Flex gap='30px' mb='2rem'>
              {production_companies?.map((company) => {
                if (company.logo_path) {
                  return (
                    <Image
                      key={company.id}
                      src={getPosterURL(company.logo_path)}
                      alt={company.name}
                      width='60px'
                      height='60px'
                      border='1px solid #838186'
                      borderRadius='8px'
                      p='.3rem'
                    />
                  );
                }
                return;
              })}
            </Flex>
          </Flex>
        </Flex>
        <Flex direction='column'>
          <MovieSimilar similar={similar} />
          <Actors actors={actors} />
        </Flex>
      </Flex>
      <ToastContainer position='top-left' autoClose={1000} />
    </>
  );
}
