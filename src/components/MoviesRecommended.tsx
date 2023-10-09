import MovieCard from "./MovieCard";
import { Movie } from "../hooks/useMovie";
import MovieGridContainer from "./MovieGridContainer";

interface Props {
  recommendedMovies: Movie[];
}

const MovieRecommended = ({ recommendedMovies }: Props) => {
  return (
    <MovieGridContainer>
      {recommendedMovies.map((movie) => (
        <MovieCard key={movie.movie_id} movie={movie} />
      ))}
    </MovieGridContainer>
  );
};

export default MovieRecommended;
