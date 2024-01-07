import APIClient from "./api-client";
import Movie from "../types/movie";
export interface FetchMoviesResponse {
  count: number;
  results: Movie[];
}

export default new APIClient<FetchMoviesResponse>("/movies/search");
