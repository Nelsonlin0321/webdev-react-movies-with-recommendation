import { SimpleGrid, Text } from "@chakra-ui/react";
import useMovie from "../hooks/useMovie";
import MovieCard from "./MovieCards";

const MovieGrid = () => {
  const { movies, error } = useMovie();

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ base: 2, sm: 4, md: 5, lg: 8, xl: 10 }}
        spacing={2}
        padding="10px"
      >
        {movies.map((movie) => (
          <MovieCard key={movie.movie_id} movie={movie} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default MovieGrid;
