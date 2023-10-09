import { SimpleGrid } from "@chakra-ui/react";
import MovieCard from "./MovieCard";
import { Movie } from "../hooks/useMovie";
import MovieCloseButton from "./MovieCloseButton";

interface Props {
  selectedMovies: Movie[];
  removeMovie: (movie_id: number) => void;
}

const MoviesSelected = ({ selectedMovies, removeMovie }: Props) => {
  return (
    <>
      <SimpleGrid
        columns={{ base: 2, sm: 4, md: 5, lg: 8, xl: 10 }}
        spacing={2}
      >
        {selectedMovies.map((movie) => (
          <MovieCard
            addMovie={() => {}}
            key={movie.movie_id}
            movie={movie}
            closeButton={
              <MovieCloseButton
                movie_id={movie.movie_id}
                removeMovie={removeMovie}
              />
            }
          />
        ))}
      </SimpleGrid>
    </>
  );
};

export default MoviesSelected;
