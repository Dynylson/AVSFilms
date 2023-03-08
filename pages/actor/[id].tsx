import { Flex, Spinner } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ActorCard } from "../../src/components/Movies/MoviesList/MovieDetails/Actors/ActorCard";

export interface IActor {
  name: string;
  biography: string;
  birthday: string;
  place_of_birth: string;
  deathday: string | null;
  profile_path: string;
  known_for_department: string;
}

export default function Actor() {
  const [actor, setActor] = useState({} as IActor);
  const [isLoading, setIsLoading] = useState(true);

  const { query } = useRouter();
  const { id } = query;

  console.log(actor);

  useEffect(() => {
    const fetchActor = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/person/${id}?api_key=ee6c522f6ee1372ba637b097a93e6d60&language=pt-BR`
      );
      const data = await response.json();
      setActor(data);
      setIsLoading(false);
    };
    fetchActor();
  }, [id]);

  return (
    <>
      {!!isLoading ? (
        <Flex w='100vw' h='80vh' alignItems='center' justifyContent='center'>
          <Spinner size='lg' />
        </Flex>
      ) : (
        <ActorCard data={actor} />
      )}
    </>
  );
}
