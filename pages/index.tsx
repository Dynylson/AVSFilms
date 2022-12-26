import { BannerHome } from "../src/components/BannerHome";
import { MoviesList } from "../src/components/Movies/MoviesList";

import { requests } from "../src/utils/requests";

interface Movie {
  title: string;
  backdrop_path: string;
  media_type?: string;
  release_date?: string;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
}

interface HomeProps {
  topRated: Movie[];
  popular: Movie[];
  upcoming: Movie[];
}

export default function Home({ topRated, popular, upcoming }: HomeProps) {
  return (
    <>
      <BannerHome />
      <MoviesList fetch={popular} category='Em alta' />
      <MoviesList fetch={topRated} category='Renomados' />
      <MoviesList fetch={upcoming} category='Em Breve' />
    </>
  );
}

export const getServerSideProps = async () => {
  const [popular, topRated, upcoming] = await Promise.all([
    fetch(requests.popular).then((response) => response.json()),

    fetch(requests.topRated).then((response) => response.json()),
    fetch(requests.upcoming).then((response) => response.json()),
  ]);
  return {
    props: {
      popular: popular.results,
      topRated: topRated.results,
      upcoming: upcoming.results,
    },
  };
};
