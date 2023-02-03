import { useColorMode, useColorModeValue } from "@chakra-ui/react";
import { createContext, ReactNode, useEffect, useState } from "react";
import { genre } from "../../typings";
import { requests } from "../utils/requests";

interface FilmsContextType {
  colorMode: string;
  switchTheme: () => void;
  genres: genre[];
}

export const FilmsContext = createContext({} as FilmsContextType);

interface FilmsContextProviderProps {
  children: ReactNode;
}

export function FilmsContextProvider({ children }: FilmsContextProviderProps) {
  const { colorMode, toggleColorMode } = useColorMode();
  const [genres, setGenres] = useState<genre[]>([]);

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

  return (
    <FilmsContext.Provider value={{ colorMode, switchTheme, genres }}>
      {children}
    </FilmsContext.Provider>
  );
}
