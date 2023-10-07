import { useEffect, useState } from "react";
import apiClient from "./services/api-client";
import { Text } from "@chakra-ui/react";

interface Movie {
  movie_id: number;
  release_year: number;
  image_url: string;
  genres: string[];
  genre: string;
  title: string;
}

interface FetchMoviesResponse {
  count: number;
  results: Movie[];
}

const MovieGrid = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchMoviesResponse>("/movies/")
      .then((res) => setMovies(res.data.results))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {movies.map((movie) => (
          <li key={movie.movie_id}>{movie.title}</li>
        ))}
      </ul>
    </>
  );
};

export default MovieGrid;
