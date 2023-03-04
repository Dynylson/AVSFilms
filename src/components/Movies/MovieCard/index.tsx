import { Flex, Image, Heading, Box, Text } from "@chakra-ui/react";
import Link from "next/link";
import { AiFillStar } from "react-icons/ai";
import { AddMovie } from "./AddMovie";

interface MovieCardProps {
  id: number;
  src: string;
  alt: string;
  title: string;
  vote_average: number;
}

export function MovieCard({
  id,
  src,
  alt,
  title,
  vote_average,
}: MovieCardProps) {
  const getPosterURL = (posterpath: string) => {
    return `https://www.themoviedb.org/t/p/w220_and_h330_face${posterpath}`;
  };

  return (
    <Link href={`/movie/${id}`}>
      <Flex direction='column' alignItems='start'>
        <Box position='relative'>
          <Image
            src={getPosterURL(src)}
            alt={alt}
            borderRadius='7px'
            width='300px'
          />
          <Flex
            w='100%'
            position='absolute'
            bottom='5'
            left='4'
            alignItems='center'
            justifyContent='space-between'
            gap='.3rem'
            borderRadius='5px'
            p='.3rem'
          >
            <Flex>
              <AiFillStar size={25} fill='#F3F808' />
              <Text color='blue.900' fontWeight='bold'>
                {vote_average}
              </Text>
            </Flex>
          </Flex>
        </Box>
        <Flex>
          <Heading color='gray.300' fontSize={[".9rem", "1.5rem"]} mt='.8rem'>
            {title}
          </Heading>
        </Flex>
      </Flex>
    </Link>
  );
}
