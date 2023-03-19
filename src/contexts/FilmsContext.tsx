import { useColorMode } from "@chakra-ui/react";
import { createContext, ReactNode, useEffect, useState } from "react";
import { genre } from "../../typings";
import { requests } from "../utils/requests";

interface FilmsContextType {
  colorMode: string;
  genres: genre[];
  movieGenre: number;
  moviesList: IMovieList[];
  switchTheme: () => void;
  moviesCategoryByGenre: (id: number) => void;
  addMovieToList: (movie: IMovieList) => void;
  handleDeleteMovie: (movies: IMovieList[]) => void;
  SearchTvShowByQuery: (id: any) => any;
}

interface IMovieList {
  title: string;
  poster_path: string;
  overview: string;
}

export const FilmsContext = createContext({} as FilmsContextType);

interface FilmsContextProviderProps {
  children: ReactNode;
}

export function FilmsContextProvider({ children }: FilmsContextProviderProps) {
  const { colorMode, toggleColorMode } = useColorMode();
  const [genres, setGenres] = useState<genre[]>([]);
  const [movieGenre, setMovieGenre] = useState(28);
  const [moviesList, setMoviesList] = useState<IMovieList[]>([]);

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

  function addMovieToList(movie: IMovieList) {
    setMoviesList([...moviesList, movie]);
  }

  function handleDeleteMovie(movies: IMovieList[]) {
    setMoviesList(movies);
  }

  async function SearchTvShowByQuery(id: number) {
    const url = await fetch(
      `https://api.themoviedb.org/3/tv/${id}?api_key=ee6c522f6ee1372ba637b097a93e6d60&language=pt-BR`
    );
    const response = await url.json();

    return response;
  }

  return (
    <FilmsContext.Provider
      value={{
        colorMode,
        switchTheme,
        genres,
        movieGenre,
        moviesCategoryByGenre,
        addMovieToList,
        moviesList,
        handleDeleteMovie,
        SearchTvShowByQuery,
      }}
    >
      {children}
    </FilmsContext.Provider>
  );
}
