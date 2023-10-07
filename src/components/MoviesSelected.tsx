import { SimpleGrid } from "@chakra-ui/react";
import MovieCard from "./MovieCard";
import { Movie } from "../hooks/useMovie";

interface Props {
  selectedMovies: Movie[];
}

const MoviesSelected = ({ selectedMovies }: Props) => {
  return (
    <>
      <SimpleGrid
        columns={{ base: 2, sm: 4, md: 5, lg: 8, xl: 10 }}
        spacing={2}
        padding="10px"
      >
        {selectedMovies.map((movie) => (
          <MovieCard addMovie={() => {}} key={movie.movie_id} movie={movie} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default MoviesSelected;
