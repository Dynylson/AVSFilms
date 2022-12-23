import { Flex, Heading, Text, useBreakpointValue } from "@chakra-ui/react";

export function BannerHome() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <>
      {isWideVersion && (
        <Flex
          bgImage='url("/assets/bannerHome.png")'
          bgPosition='start'
          height='380px'
          maxW='100%'
        >
          <Flex direction='column' maxW={1700} mx='auto' w='100%' mt='3.9rem'>
            <Heading color='white.900' fontSize='3rem'>
              Não sabe o que assistir no fim de semana?
            </Heading>
            <Text color='white.900' fontSize='2.25rem' mt='5rem'>
              Venha dar uma olhada nos filmes em alta, confira seus trailers e{" "}
              <br /> monte sua própria lista de filmes!
            </Text>
          </Flex>
        </Flex>
      )}
    </>
  );
}
