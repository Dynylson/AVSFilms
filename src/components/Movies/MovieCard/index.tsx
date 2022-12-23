import { Flex, Image, Heading } from "@chakra-ui/react";

interface MovieCardProps {
  src: string;
  alt: string;
  title: string;
}

export function MovieCard({ src, alt, title }: MovieCardProps) {
  const getPosterURL = (posterpath: string) => {
    return `https://www.themoviedb.org/t/p/w220_and_h330_face${posterpath}`;
  };

  return (
    <Flex direction='column' alignItems='start' cursor='grab'>
      <Image src={getPosterURL(src)} alt={alt} borderRadius='7px' />
      <Heading color='gray.300' fontSize='1.5rem' mt='.8rem'>
        {title}
      </Heading>
    </Flex>
  );
}
