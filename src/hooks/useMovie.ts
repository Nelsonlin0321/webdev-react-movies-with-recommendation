import { useEffect, useState } from "react";
import { AxiosError, AxiosRequestConfig, CanceledError } from "axios";
import searchService, { Movie } from "../services/searchService";

const useMovie = (requestConfig?: AxiosRequestConfig, deps?: any[]) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);

    const fetchQueryMovie = async (requestConfig?: AxiosRequestConfig) => {
      try {
        let queryResult = await searchService
          .getAll({
            signal: controller.signal,
            ...requestConfig,
          })
          .then((res) => res.results);

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
