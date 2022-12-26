const API_KEY = "ee6c522f6ee1372ba637b097a93e6d60";

export const requests = {
  popular: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=pt-BR`,
  topRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=pt-BR`,
  upcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=pt-BR`,
};
