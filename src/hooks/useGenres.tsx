import { useContext } from "react";
import { FilmsContext } from "../contexts/FilmsContext";

export function useGenres() {
  const { genres, movieGenre, moviesCategoryByGenre } =
    useContext(FilmsContext);

  return { genres, movieGenre, moviesCategoryByGenre };
}
