import { Movie } from "../types/movie";
import APIClient from "./api-client";
export interface FetchMoviesResponse {
  count: number;
  results: Movie[];
}

export default new APIClient<FetchMoviesResponse>("/movies/search");
