import { useEffect, useState } from "react";
import apiClient from "../components/services/api-client";
import { CanceledError } from "axios";

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

const useMovie = () => {


  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

    useEffect(() => {
      const controller = new AbortController();
      setLoading(true);
    apiClient
      .get<FetchMoviesResponse>("/movies/",{signal:controller.signal})
      .then((res) => {
        setMovies(res.data.results);
        setLoading(false);
      })
        .catch((err) => {
          if (!(err instanceof CanceledError)) {
            setError(err.message);
            setLoading(false);
          };
      });
  }, []);
    
    return {movies,error,isLoading,setLoading}
}

export default useMovie