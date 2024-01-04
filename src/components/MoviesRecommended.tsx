import MovieCard from "./MovieCard";
import MovieGridContainer from "./MovieGridContainer";
import MovieCardSkeleton from "./MovieCardSkeleton";
import { Movie } from "../services/searchService";

interface Props {
  recommendedMovies: Movie[];
  isRecommending: boolean;
}

const MovieRecommended = ({ recommendedMovies, isRecommending }: Props) => {
  const numberOfSkeleton = 10;
  const skeletons = [];
  for (let i = 0; i < numberOfSkeleton; i++) {
    skeletons.push(i);
  }

  return (
    <MovieGridContainer>
      {isRecommending &&
        skeletons.map((skeleton) => <MovieCardSkeleton key={skeleton} />)}

      {recommendedMovies.map((movie) => (
        <MovieCard key={movie.movie_id} movie={movie} />
      ))}
    </MovieGridContainer>
  );
};

export default MovieRecommended;
