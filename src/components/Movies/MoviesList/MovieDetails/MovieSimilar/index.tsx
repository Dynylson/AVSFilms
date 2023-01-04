import { Divider, Flex, Text } from "@chakra-ui/react";
import { SimilarProps } from "../../../../../../pages/movie/[id]";

interface MovieSimilarProps {
  similar: SimilarProps[];
}

export function MovieSimilar({ similar }: MovieSimilarProps) {
  // console.log("Similar: " + similar.name);

  similar?.forEach((similar) => console.log(similar.title));

  return (
    <Flex ml='15rem'>
      <Divider
        orientation='vertical'
        ml={20}
        p={5}
        height='98vh'
        borderColor='gray.300'
      />
      <Text>Teste</Text>
    </Flex>
  );
}
