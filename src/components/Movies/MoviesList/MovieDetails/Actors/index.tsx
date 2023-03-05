import {
  Flex,
  Heading,
  Link,
  Image,
  Box,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { IActor } from "../../../../../../typings";
import { getMovieImage } from "../../../../../utils/requests";

interface ActorsProps {
  actors: IActor[];
}

export function Actors({ actors }: ActorsProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <>
      {isWideVersion && (
        <Box mt='5rem' ml='15rem'>
          <Heading fontSize='2rem'>Atores</Heading>
          <Splide
            options={{
              width: 600,
              perPage: 3,
              gap: "1rem",
              arrows: false,
              pagination: false,
            }}
          >
            {actors?.map(({ name, profile_path, id, character }) => {
              return (
                <SplideSlide key={id}>
                  <Link
                    href={`/movie/${id}`}
                    _hover={{ text_decoration: "none" }}
                  >
                    <Flex maxW='100%' w='210px'>
                      <Box>
                        <Image
                          src={getMovieImage(profile_path)}
                          alt={name}
                          borderRadius='8px'
                          bg='blue'
                          maxW='100%'
                        />
                        <Heading fontSize='1rem' mt='.5rem'>
                          {name} <br /> ({character})
                        </Heading>
                      </Box>
                    </Flex>
                  </Link>
                </SplideSlide>
              );
            })}
          </Splide>
        </Box>
      )}
    </>
  );
}
