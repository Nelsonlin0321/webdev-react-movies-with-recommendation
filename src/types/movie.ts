export interface Movie {
  movie_id: number;
  release_year: number;
  image_url: string;
  genres: string[];
  title: string;
  rating: number;
}

export type recommendationInputs = {
  user_age: number;
  sex: "M" | "F";
  topk: number;
  movie_ids: number[];
  rating_threshold: number;
};

export type personalizationInputs = {
  user_age: number;
  sex: "M" | "F";
  viewed_movie_ids: number[];
  suggested_movie_ids: number[];
};
