import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from "@chakra-ui/react";
import MovieCardSkeleton from "./MovieCardSkeleton";
import MovieCard from "./MovieCard";
import { Movie } from "../services/searchService";
import MovieGridContainer from "./MovieGridContainer";
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
      {error && (
        <Alert status="error" marginTop={"5"}>
          <AlertIcon />
          <AlertTitle>Error:</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <MovieGridContainer>
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
      </MovieGridContainer>
    </>
  );
};

export default MovieGrid;
