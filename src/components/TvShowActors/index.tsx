import { ITvShowActors } from "../../../pages/tv/[id]";
import { TvShowActorsCard } from "./TvShowActorsCard";

interface TvShowActorsProps {
  actors: ITvShowActors[];
}

export function TvShowActors({ actors }: TvShowActorsProps) {
  return (
    <h1>
      {actors?.map((actor) => {
        return <TvShowActorsCard key={actor.id} data={actor} />;
      })}
    </h1>
  );
}
