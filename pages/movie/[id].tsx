import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Text } from "@chakra-ui/react";
import { api } from "../api/api";

interface MovieProps {
  adult: boolean;
  original_title: string;
}

export default function Movie() {
  const [movie, setMovie] = useState({} as MovieProps);

  const { query } = useRouter();
  const { id } = query;

  useEffect(() => {
    const fetchMovieById = async () => {
      const { data } = await api.get(
        `/${id}?api_key=ee6c522f6ee1372ba637b097a93e6d60&language=pt-BR`
      );
      setMovie(data);
      console.log(data);
    };
    fetchMovieById();
  }, []);

  return <Text>{movie.original_title}</Text>;
}
