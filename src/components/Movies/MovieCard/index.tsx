import { Flex, Image, Heading, Box, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

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

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      {isLoading ? (
        <Skeleton height={250} width={150} duration={2} />
      ) : (
        <Link href={`/movie/${id}`}>
          <Flex className='movie-card' direction='column' alignItems='start'>
            <Box position='relative'>
              <Image
                src={getPosterURL(src)}
                alt={alt}
                borderRadius='7px'
                width='300px'
              />
            </Box>
            <Flex>
              <Heading
                color='gray.300'
                fontSize={[".9rem", "1.5rem"]}
                mt='.8rem'
              >
                {title}
              </Heading>
            </Flex>
          </Flex>
        </Link>
      )}
    </>
  );
}
