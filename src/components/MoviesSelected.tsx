import MovieCard from "./MovieCard";
import { Movie } from "../hooks/useMovie";
import MovieCloseButton from "./MovieCloseButton";
import MovieGridContainer from "./MovieGridContainer";

interface Props {
  selectedMovies: Movie[];
  removeMovie: (movie_id: number) => void;
}

const MoviesSelected = ({ selectedMovies, removeMovie }: Props) => {
  return (
    <>
      <MovieGridContainer>
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
      </MovieGridContainer>
    </>
  );
};

export default MoviesSelected;
