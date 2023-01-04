import { BannerHome } from "../src/components/BannerHome";
import { MoviesList } from "../src/components/Movies/MoviesList";
import { MovieGenre } from "../src/components/Movies/MoviesList/MovieGenre";

import { requests } from "../src/utils/requests";
import { Movie } from "../typings";

interface HomeProps {
  topRated: Movie[];
  popular: Movie[];
  upcoming: Movie[];
}

export default function Home({ topRated, popular, upcoming }: HomeProps) {
  return (
    <>
      <BannerHome />
      <MovieGenre />
      <MoviesList fetch={popular} category='Em Alta' />
      <MoviesList fetch={topRated} category='Renomados' />
      <MoviesList fetch={upcoming} category='Em Breve' />
      <MoviesList fetch={upcoming} category='Reproduzindo Agora' />
    </>
  );
}

export const getServerSideProps = async () => {
  const [popular, topRated, upcoming, nowPlaying] = await Promise.all([
    fetch(requests.popular).then((response) => response.json()),
    fetch(requests.topRated).then((response) => response.json()),
    fetch(requests.upcoming).then((response) => response.json()),
    fetch(requests.nowPlaying).then((response) => response.json()),
  ]);
  return {
    props: {
      popular: popular.results,
      topRated: topRated.results,
      upcoming: upcoming.results,
      nowPlaying: nowPlaying.results,
    },
  };
};
