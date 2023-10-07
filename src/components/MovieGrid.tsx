import { SimpleGrid, Text } from "@chakra-ui/react";
import MovieCardSkeleton from "./MovieCardSkeleton";
import useMovie from "../hooks/useMovie";
import MovieCard from "./MovieCards";

export interface Props {
  selectedGenre: string;
  selectedOrderBy: string;
}

const MovieGrid = ({ selectedGenre, selectedOrderBy }: Props) => {
  selectedGenre = selectedGenre === "All" ? "" : selectedGenre;

  const { movies, error, isLoading } = useMovie(
    {
      params: { genre: selectedGenre, order_by: selectedOrderBy },
    },
    [selectedGenre, selectedOrderBy]
  );
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
        padding="10px"
      >
        {isLoading &&
          skeletons.map((skeleton) => <MovieCardSkeleton key={skeleton} />)}

        {!isLoading &&
          movies.map((movie) => (
            <MovieCard key={movie.movie_id} movie={movie} />
          ))}
      </SimpleGrid>
    </>
  );
};

export default MovieGrid;
