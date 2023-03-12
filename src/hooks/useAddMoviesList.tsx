import { useContext } from "react";
import { FilmsContext } from "../contexts/FilmsContext";

export function useAddMoviesList() {
  const { addMovieToList, moviesList } = useContext(FilmsContext);

  return { addMovieToList, moviesList };
}
