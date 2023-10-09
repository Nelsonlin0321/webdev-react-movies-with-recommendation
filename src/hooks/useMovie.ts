import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";

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


const useMovie = (requestConfig?: AxiosRequestConfig,deps?:any[]) => {


  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

    useEffect(() => {
      const controller = new AbortController();
      setLoading(true);
    apiClient
      .get<FetchMoviesResponse>("/movies/",{signal:controller.signal,...requestConfig})
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
  }, deps);
    
    return {movies,error,isLoading,setLoading}
}

export default useMovie