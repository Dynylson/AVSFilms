import { useContext } from "react";
import { FilmsContext } from "../contexts/FilmsContext";

export function useSearchMovieById() {
    const { searchMovieById } = useContext(FilmsContext);

    return { searchMovieById };
}