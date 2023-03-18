import {
  Flex,
  Image,
  Heading,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

import Link from "next/link";
import { useEffect, useState } from "react";
import { formatDate } from "../../../utils/requests";

interface SearchMoviesCardProps {
  id: number;
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
  id,
}: SearchMoviesCardProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  const [date, setDate] = useState("");

  const getPosterURL = (posterpath: string) => {
    return `https://www.themoviedb.org/t/p/w220_and_h330_face${posterpath}`;
  };

  useEffect(() => {
    const awaitDate = async () => {
      const dateFormated = await formatDate(release_date);
      setDate(dateFormated);
    };
    awaitDate();
  }, [release_date]);

  return (
    <Link href={`/movie/${id}`}>
      <Flex
        border='1px solid rgb(227, 227, 227)'
        borderRadius='8px'
        gap='.7rem'
        mb='1.3rem'
        boxShadow='0 2px 8px rgb(0 0 0 / 10%)'
        mx={[".7rem", "0"]}
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
          <Text color='blue.900'>Lançamento: {date}</Text>
          {isWideVersion && <Text mt='1rem'>{overview}</Text>}
        </Flex>
      </Flex>
    </Link>
  );
}
