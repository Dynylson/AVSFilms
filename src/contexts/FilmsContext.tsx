import { useColorMode, useColorModeValue } from "@chakra-ui/react";
import { createContext, ReactNode, useEffect, useState } from "react";
import { genre } from "../../typings";
import { requests } from "../utils/requests";

interface FilmsContextType {
  colorMode: string;
  genres: genre[];
  movieGenre: number;
  switchTheme: () => void;
  moviesCategoryByGenre: (id: number) => void;
}

export const FilmsContext = createContext({} as FilmsContextType);

interface FilmsContextProviderProps {
  children: ReactNode;
}

export function FilmsContextProvider({ children }: FilmsContextProviderProps) {
  const { colorMode, toggleColorMode } = useColorMode();
  const [genres, setGenres] = useState<genre[]>([]);
  const [movieGenre, setMovieGenre] = useState(28);

  function switchTheme() {
    toggleColorMode();
  }

  useEffect(() => {
    const fetchGenres = async () => {
      const response = await fetch(requests.genres);
      const genres = await response.json();
      setGenres(genres.genres);
    };
    fetchGenres();
  }, []);

  function moviesCategoryByGenre(id: number) {
    setMovieGenre(id);
  }

  return (
    <FilmsContext.Provider
      value={{
        colorMode,
        switchTheme,
        genres,
        movieGenre,
        moviesCategoryByGenre,
      }}
    >
      {children}
    </FilmsContext.Provider>
  );
}
