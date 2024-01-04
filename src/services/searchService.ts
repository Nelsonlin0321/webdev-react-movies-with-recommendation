import APIClient from "./api-client";

export interface Movie {
  movie_id: number;
  release_year: number;
  image_url: string;
  genres: string[];
  title: string;
  rating: number;
}

export interface FetchMoviesResponse {
  count: number;
  results: Movie[];
}

export default new APIClient<FetchMoviesResponse>("/movies/search");
