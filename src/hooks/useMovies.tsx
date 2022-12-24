import {
  useState,
  useEffect,
  createContext,
  useContext,
  ReactNode,
} from "react";
import { api } from "../../pages/api/api";

interface MoviesProviderProps {
  children: ReactNode;
}

const MoviesContext = createContext([]);

export function MoviesProvider({ children }: MoviesProviderProps) {
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  useEffect(() => {
    const topRatedMoviesFetch = async () => {
      const { data } = await api.get(
        `/top_rated?api_key=ee6c522f6ee1372ba637b097a93e6d60&language=pt-BR&page=1`
      );
      setTopRatedMovies(data.results);
    };
    topRatedMoviesFetch();
  }, []);

  return (
    <MoviesContext.Provider value={topRatedMovies}>
      {children}
    </MoviesContext.Provider>
  );
}

export function useMovies() {
  const context = useContext(MoviesContext);

  return context;
}
