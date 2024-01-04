import { useEffect, useState } from "react";
import apiRecommender from "../services/api-recommender";
import { CanceledError } from "axios";
import { Movie } from "../services/searchService";

const useMovie = (deps?: any[]) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
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
