import {
  Flex,
  Image,
  Heading,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { formatDate, getMovieImage } from "../../../utils/requests";
import Link from "next/link";

interface SearchTvShowCardProps {
  data: TvShowProps;
}

interface TvShowProps {
  id: number;
  name: string;
  overview: string;
  first_air_date: string;
  poster_path: string;
}

export function SearchTvShowCard({ data }: SearchTvShowCardProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  // const dateFormated = formatDate(data.first_air_date);

  return (
    <>
      <Link href={`/movie/${data.id}`}>
        <Flex
          border='1px solid rgb(227, 227, 227)'
          borderRadius='8px'
          gap='.7rem'
          mb='1.3rem'
          boxShadow='0 2px 8px rgb(0 0 0 / 10%)'
          mx={[".7rem", "0"]}
        >
          <Image
            src={getMovieImage(data.poster_path)}
            maxW='94px'
            borderTopLeftRadius='8px'
            borderBottomLeftRadius='8px'
            alt={data.name}
          />
          <Flex direction='column'>
            <Heading fontSize='1.1rem' mt='.8rem'>
              {data.name}
            </Heading>
            <Text>{data.first_air_date}</Text>
            {isWideVersion && <Text mt='1rem'>{data.overview}</Text>}
          </Flex>
        </Flex>
      </Link>
    </>
  );
}
