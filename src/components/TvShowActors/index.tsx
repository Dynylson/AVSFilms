import { ITvShowActors } from "../../../pages/tv/[id]";
import { TvShowActorsCard } from "./TvShowActorsCard";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Flex } from "@chakra-ui/react";
interface TvShowActorsProps {
  actors: ITvShowActors[];
}

export function TvShowActors({ actors }: TvShowActorsProps) {
  console.log(actors);

  return (
    <Splide
      options={{
        perPage: 9,
        perMove: 3,
        drag: "free",
        gap: ".3rem",
        arrows: false,
        pagination: false,
      }}
    >
      {actors?.map((actor) => {
        return (
          <SplideSlide key={actor.id}>
            <TvShowActorsCard data={actor} />
          </SplideSlide>
        );
      })}
    </Splide>
  );
}
