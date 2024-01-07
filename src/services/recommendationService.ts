import APIClient from "./api-recommender";
import Movie from "../types/movie";

export default new APIClient<Movie[]>("/recommend");
