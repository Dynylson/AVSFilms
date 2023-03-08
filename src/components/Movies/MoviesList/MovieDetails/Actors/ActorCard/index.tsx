import { Flex, Heading, Text, Image } from "@chakra-ui/react";
import { IActor } from "../../../../../../../pages/actor/[id]";
import { getMovieImage } from "../../../../../../utils/requests";

interface ActorCardProps {
  data: IActor;
}

export function ActorCard({ data }: ActorCardProps) {
  return (
    <>
      <Flex maxW={1700} mx='auto' mt='3rem'>
        <Flex
          direction={["column", "row"]}
          gap='2rem'
          alignItems={["center", "start"]}
        >
          <Image
            src={getMovieImage(data.profile_path)}
            alt={data.name}
            maxW='100%'
            borderRadius='6px'
            height='300px'
          />
          <Flex direction='column'>
            <Heading>
              {data.name} ({!data.deathday ? "Vivo" : "Morte: " + data.deathday}
              )
            </Heading>
            <Heading fontSize='1rem' mt='1rem'>
              Nascimento:
              <Text display='inline' fontWeight='normal'>
                {" "}
                {data.birthday} ({data.place_of_birth})
              </Text>
            </Heading>
            <Heading fontSize='1rem' mt='.3rem' mb='1rem'>
              Departamento:
              <Text display='inline' fontWeight='normal'>
                {" "}
                {data.known_for_department}
              </Text>
            </Heading>
            <Heading fontSize='2rem' mb='.5rem'>
              Biografia
            </Heading>
            <Text maxW='60ch'>{data.biography}</Text>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
