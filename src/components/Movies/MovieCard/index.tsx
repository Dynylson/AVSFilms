import { Flex, Image, Heading, Box, Text } from "@chakra-ui/react";
import Link from "next/link";
import { AiFillStar } from "react-icons/ai";

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
            position='absolute'
            bottom='5'
            left='4'
            alignItems='center'
            gap='.3rem'
            bg='rgba(0, 0, 0, .5)'
            borderRadius='5px'
            p='.3rem'
          >
            <AiFillStar size={25} fill='#F3F808' />
            <Text color='blue.900' fontWeight='bold'>
              {vote_average}
            </Text>
          </Flex>
        </Box>
        <Heading color='gray.300' fontSize={[".9rem", "1.5rem"]} mt='.8rem'>
          {title}
        </Heading>
      </Flex>
    </Link>
  );
}
