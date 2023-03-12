import { useContext } from "react";
import { FilmsContext } from "../contexts/FilmsContext";

export function useAddMoviesList() {
  const { addMovieToList, moviesList, handleDeleteMovie } =
    useContext(FilmsContext);

  return { addMovieToList, moviesList, handleDeleteMovie };
}
