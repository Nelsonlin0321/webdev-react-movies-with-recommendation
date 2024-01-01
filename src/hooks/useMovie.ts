import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosError, AxiosRequestConfig, CanceledError } from "axios";

export interface Movie {
  movie_id: number;
  release_year: number;
  image_url: string;
  genres: string[];
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

    const fetchQueryMovie = async (requestConfig?: AxiosRequestConfig) => {
      try {
        let queryResult = await apiClient
          .get<FetchMoviesResponse>("/movies/", {
            signal: controller.signal,
            ...requestConfig,
          })
          .then((res) => res.data.results);

        if (requestConfig?.params.q) {
          const searchResult = await apiClient
            .get<FetchMoviesResponse>("/movies/search", {
              signal: controller.signal,
              params: { q: requestConfig.params.q, limit: 1000 },
            })
            .then((res) => res.data.results);

          const searchMovieIds = new Set(
            searchResult.map((movie) => movie.movie_id)
          );
          queryResult = queryResult.filter((movie) =>
            searchMovieIds.has(movie.movie_id)
          );
        }
        setMovies(queryResult);
        setLoading(false);
      } catch (error) {
        const axiosError = error as AxiosError;
        if (!(error instanceof CanceledError)) {
          setError(axiosError.message);
          setLoading(false);
        }
      }
    };

    fetchQueryMovie(requestConfig);
  }, deps);

  return { movies, error, isLoading, setLoading };
};

export default useMovie;
