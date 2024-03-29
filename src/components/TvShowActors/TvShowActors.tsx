import { ITvShowActors } from "../TvPage/TvPage";
import { TvShowActorsCard } from "./components/TvShowActorsCard";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/mousewheel";

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
