import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { ITvShowActors } from "../../../../pages/tv/[id]";
import { getMovieImage } from "../../../utils/requests";

interface TvShowActorsCardProps {
  data: ITvShowActors;
}

export function TvShowActorsCard({ data }: TvShowActorsCardProps) {
  return (
    <Flex
      direction='column'
      // w='200px'
      // h='200px'
      border='1px solid rgba(227, 227, 227, 1)'
      pb='10px'
      borderRadius='8px'
      m='10px 4px 10px 10px'
    >
      <Image
        src={getMovieImage(data?.profile_path)}
        alt={data?.name}
        borderRadius='8px 8px 0 0'
      />
      <Box m='.5rem'>
        <Heading as='h2' fontSize='1.2rem'>
          {data?.name}
        </Heading>
        <Text>{data?.character}</Text>
      </Box>
    </Flex>
  );
}
