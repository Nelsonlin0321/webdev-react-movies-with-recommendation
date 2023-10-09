import { useEffect, useState } from "react";
import apiRecommender from "../components/services/api-recommender";
import { AxiosRequestConfig, CanceledError } from "axios";

export interface Movie {
  movie_id: number;
  release_year: number;
  image_url: string;
  genres: string[];
  genre: string;
  title: string;
  rating: number;
}

interface FetchMoviesResponse {
  count: number;
  results: Movie[];
}

const useMovie = (requestConfig?: AxiosRequestConfig, deps?: any[]) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiRecommender
      .post("/recommend", {})
      .then((res) => {
        setMovies(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (!(err instanceof CanceledError)) {
          setError(err.message);
          setLoading(false);
        }
      });
  }, deps);

  return { movies, error, isLoading, setLoading };
};

export default useMovie;
