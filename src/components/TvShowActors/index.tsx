import { ITvShowActors } from "../../../pages/tv/[id]";
import { TvShowActorsCard } from "./TvShowActorsCard";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/mousewheel";
import { Button } from "@chakra-ui/react";

interface TvShowActorsProps {
  actors: ITvShowActors[];
}

export function TvShowActors({ actors }: TvShowActorsProps) {
  const arrayReduced = actors?.filter((actor, index) => {
    return index < 20;
  });

  return (
    <>
      <Swiper spaceBetween={5} slidesPerView={9} mousewheel freeMode>
        {arrayReduced?.map((actor) => {
          return (
            <SwiperSlide key={actor.id}>
              <TvShowActorsCard data={actor} />
            </SwiperSlide>
          );
        })}
        ;
      </Swiper>
    </>
  );
}
