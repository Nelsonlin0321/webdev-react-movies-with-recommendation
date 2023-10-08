import { SimpleGrid, Text } from "@chakra-ui/react";
import MovieCardSkeleton from "./MovieCardSkeleton";
import MovieCard from "./MovieCard";
import { Movie } from "../hooks/useMovie";
interface Props {
  selectedGenre: string;
  movies: Movie[];
  error: any;
  isLoading: any;
  addMovie: (movie: Movie) => void;
}

const MovieGrid = ({
  selectedGenre,
  movies,
  error,
  isLoading,
  addMovie,
}: Props) => {
  selectedGenre = selectedGenre === "All" ? "" : selectedGenre;

  const numberOfSkeleton = 30;
  const skeletons = [];
  for (let i = 0; i < numberOfSkeleton; i++) {
    skeletons.push(i);
  }

  return (
    <>
      {error && <Text>{error}</Text>}

      <SimpleGrid
        columns={{ base: 2, sm: 4, md: 5, lg: 8, xl: 10 }}
        spacing={2}
        paddingTop="10px"
      >
        {isLoading &&
          skeletons.map((skeleton) => <MovieCardSkeleton key={skeleton} />)}

        {!isLoading &&
          movies.map((movie) => (
            <MovieCard
              addMovie={addMovie}
              key={movie.movie_id}
              movie={movie}
              imageClassName="image-card"
            />
          ))}
      </SimpleGrid>
    </>
  );
};

export default MovieGrid;
