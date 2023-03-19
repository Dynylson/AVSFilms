import { format, parseISO } from "date-fns";

const API_KEY = "ee6c522f6ee1372ba637b097a93e6d60";
const BASE_URL = "https://api.themoviedb.org/3/movie";
const LANGUAGE = "language=pt-BR";

export const requests = {
  popular: `${BASE_URL}/popular?api_key=${API_KEY}&${LANGUAGE}`,
  topRated: `${BASE_URL}/top_rated?api_key=${API_KEY}&${LANGUAGE}`,
  upcoming: `${BASE_URL}/upcoming?api_key=${API_KEY}&${LANGUAGE}`,
  nowPlaying: `
  ${BASE_URL}/now_playing?api_key=${API_KEY}&${LANGUAGE}&page=1`,
  genres: `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&${LANGUAGE}`,
};

export const getMovieImage = (posterpath: string) => {
  return `https://www.themoviedb.org/t/p/w300_and_h450_face${posterpath}`;
};

export const getBannerImage = (backdrop_path: string) => {
  return `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${backdrop_path}`;
};

export const formatDate = async (date: string) => {
  const dateFormated = format(parseISO(date), "dd-MM-yyyy");
  return await Promise.resolve(dateFormated);
};
