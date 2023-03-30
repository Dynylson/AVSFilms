import { Flex, Spinner } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ActorCard } from "../../src/components/Movies/components/MoviesList/components/MovieDetails/components/Actors/components/ActorCard";

export interface IActor {
  name: string;
  biography: string;
  birthday: string;
  place_of_birth: string;
  deathday: string | null;
  profile_path: string;
  known_for_department: string;
}

export interface IActorMovie {
  id: number;
  original_title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  character: string;
  media_type: string;
}

export default function Actor() {
  const [actor, setActor] = useState({} as IActor);
  const [actorMovies, setActorMovies] = useState<IActorMovie[]>([]);

  const [isLoading, setIsLoading] = useState(true);

  const { query } = useRouter();
  const { id } = query;

  const actorInfoUrl = `https://api.themoviedb.org/3/person/${id}?api_key=ee6c522f6ee1372ba637b097a93e6d60&language=en-US`;
  const actorMoviesUrl = `https://api.themoviedb.org/3/person/${id}/combined_credits?api_key=ee6c522f6ee1372ba637b097a93e6d60&language=en-US`;

  useEffect(() => {
    const fetchActor = async () => {
      const actorResponse = await fetch(actorInfoUrl);
      const actorData = await actorResponse.json();

      const actorMoviesResponse = await fetch(actorMoviesUrl);
      const actorMoviesData = await actorMoviesResponse.json();

      setActor(actorData);
      setActorMovies(actorMoviesData.cast);
      console.log(actorMoviesData.cast);

      setIsLoading(false);
    };
    fetchActor();
  }, [id, actorInfoUrl, actorMoviesUrl]);

  return (
    <>
      {!!isLoading ? (
        <Flex w='100vw' h='80vh' alignItems='center' justifyContent='center'>
          <Spinner size='lg' />
        </Flex>
      ) : (
        <ActorCard data={actor} movies={actorMovies} />
      )}
    </>
  );
}
