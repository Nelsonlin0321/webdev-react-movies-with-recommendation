import { SimpleGrid } from "@chakra-ui/react";
import MovieCard from "./MovieCard";
import { Movie } from "../hooks/useMovie";

interface Props {
  recommendedMovies: Movie[];
}

const MovieRecommended = ({ recommendedMovies }: Props) => {
  return (
    <>
      <SimpleGrid
        columns={{ base: 2, sm: 4, md: 5, lg: 8, xl: 10 }}
        spacing={2}
        padding="10px"
      >
        {recommendedMovies.map((movie) => (
          <MovieCard key={movie.movie_id} movie={movie} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default MovieRecommended;
