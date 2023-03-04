import { Box } from "@chakra-ui/react";
import { BannerHome } from "../src/components/BannerHome";
import { MoviesList } from "../src/components/Movies/MoviesList";
import { MovieGenre } from "../src/components/Movies/MoviesList/MovieGenre";

import { requests } from "../src/utils/requests";
import { IMovie } from "../typings";

interface HomeProps {
  topRated: IMovie[];
  popular: IMovie[];
  upcoming: IMovie[];
  nowPlaying: IMovie[];
}

export default function Home({
  topRated,
  popular,
  upcoming,
  nowPlaying,
}: HomeProps) {
  return (
    <Box mx='1.5rem'>
      {/* <BannerHome /> */}
      <MovieGenre />
      <MoviesList fetch={popular} category='Em Alta' />
      <MoviesList fetch={topRated} category='Renomados' />
      <MoviesList fetch={upcoming} category='Em Breve' />
      <MoviesList fetch={nowPlaying} category='Reproduzindo Agora' />
    </Box>
  );
}

export const getServerSideProps = async () => {
  const [popular, topRated, upcoming, nowPlaying] = await Promise.all([
    fetch(`${requests.popular}&with_genres=27`).then((response) =>
      response.json()
    ),
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
