import { useContext } from "react";
import { FilmsContext } from "../contexts/FilmsContext";

export function useTvShowData() {
  const { SearchTvShowByQuery } = useContext(FilmsContext);

  return { SearchTvShowByQuery };
}
