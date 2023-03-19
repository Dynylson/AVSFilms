import { Button } from "@chakra-ui/react";
import { toast, ToastContainer } from "react-toastify";

import { useAddMoviesList } from "../../hooks/useAddMoviesList";

import "react-toastify/dist/ReactToastify.css";

interface ButtonListProps {
  w?: string;
  title: string;
  poster_path: string;
  overview: string;
}

export function ButtonList({
  title,
  poster_path,
  overview,
  ...props
}: ButtonListProps) {
  const { addMovieToList, moviesList } = useAddMoviesList();

  function handleAddMoviesToList() {
    const movieAlreadyExists = moviesList.find((movie) => {
      return movie.title === title;
    });
    if (!movieAlreadyExists) addMovieToList({ title, poster_path, overview });
    toast.success("Filme adicionado à lista!");
  }

  return (
    <>
      <Button
        maxW='auto'
        justifyContent='start'
        onClick={handleAddMoviesToList}
        background='#48BB78'
        _hover={{ background: "#2F855A" }}
        {...props}
      >
        Adicionar à lista
      </Button>
      <ToastContainer position='top-left' autoClose={1000} />
    </>
  );
}
