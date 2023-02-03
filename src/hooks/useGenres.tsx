import { useContext } from "react";
import { FilmsContext } from "../contexts/FilmsContext";

export function useGenres() {
  const { genres } = useContext(FilmsContext);

  return { genres };
}
