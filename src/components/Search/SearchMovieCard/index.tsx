import { Flex, Image, Heading, Text } from "@chakra-ui/react";
import { getPosterURL } from "../../Movies/MovieCard";

interface SearchMoviesCardProps {
  title: string;
  src: string;
  release_date: string;
  overview: string;
}

export function SearchMovieCard({
  title,
  src,
  release_date,
  overview,
}: SearchMoviesCardProps) {
  return (
    <Flex
      border='1px solid rgb(227, 227, 227)'
      borderRadius='8px'
      gap='.7rem'
      mb='1.3rem'
      boxShadow='0 2px 8px rgb(0 0 0 / 10%)'
    >
      <Image
        src={getPosterURL(src)}
        maxW='94px'
        borderTopLeftRadius='8px'
        borderBottomLeftRadius='8px'
        alt={title}
      />
      <Flex direction='column'>
        <Heading fontSize='1.1rem' mt='.8rem'>
          {title}
        </Heading>
        <Text>{release_date}</Text>
        <Text mt='1rem'>{overview}</Text>
      </Flex>
    </Flex>
  );
}
