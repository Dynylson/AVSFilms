import { useContext } from "react";
import { FilmsContext } from "../contexts/FilmsContext";

export function useSwitchTheme() {
  const { colorMode, switchTheme } = useContext(FilmsContext);

  return { colorMode, switchTheme };
}
