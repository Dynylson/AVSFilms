import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import { ITvShowActors } from "../../TvPage/TvPage";
import { getMovieImage } from "../../../utils/requests";

interface TvShowActorsCardProps {
  data: ITvShowActors;
}

export function TvShowActorsCard({ data }: TvShowActorsCardProps) {
  return (
    <Link href={`/actor/${data.id}`}>
      <Flex
        direction='column'
        h='350px'
        border='1px solid rgba(227, 227, 227, 1)'
        pb='1rem'
        borderRadius='8px'
        m='10px 4px 10px 10px'
      >
        <Image
          src={getMovieImage(data?.profile_path)}
          alt={data?.name}
          borderRadius='8px 8px 0 0'
        />
        <Box m='.5rem'>
          <Heading as='h2' fontSize='1rem'>
            {data?.name}
          </Heading>
          <Text fontSize='.9rem'>{data?.character}</Text>
        </Box>
      </Flex>
    </Link>
  );
}
