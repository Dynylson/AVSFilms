import { Heading, Flex, Image, Box, Text } from "@chakra-ui/react";

interface genre {
  id: number;
  name: string;
}

interface productionCompany {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

interface MovieProps {
  poster_path: string;
  alt: string;
  title: string;
  genres: genre[];
  overview: string;
  productionCompanies: productionCompany[];
}

export function MovieDetails({
  poster_path,
  alt,
  title,
  genres,
  overview,
  productionCompanies,
}: MovieProps) {
  const getPosterURL = (posterpath: string) => {
    return `https://www.themoviedb.org/t/p/w220_and_h330_face${posterpath}`;
  };

  return (
    <Flex maxW={1700} mx='auto' mt='3rem'>
      <Flex gap='2rem'>
        <Image
          src={getPosterURL(poster_path)}
          alt={alt}
          maxW='100%'
          borderRadius='6px'
        />
        <Flex direction='column'>
          <Heading>{title}</Heading>
          <Flex gap='1rem'>
            {genres?.map((genre) => {
              return (
                <Text
                  key={genre.id}
                  border='1px solid #838186'
                  borderRadius='8px'
                  p='.5rem'
                >
                  {genre.name}
                </Text>
              );
            })}
          </Flex>
          <Heading mt='3rem' fontSize='1.5rem'>
            Sinopse
          </Heading>
          <Text maxW='65ch'>{overview}</Text>
          <Heading mt='3rem' fontSize='1.5rem'>
            Produtoras
          </Heading>
          <Flex>
            {productionCompanies?.map((company) => {
              return (
                <Image
                  key={company.id}
                  src={getPosterURL(company.logo_path)}
                  alt={company.name}
                />
              );
            })}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
