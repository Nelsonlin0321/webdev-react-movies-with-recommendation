import searchService, { FetchMoviesResponse } from "../services/searchService";
import recommendationService from "../services/recommendationService";
import { useInfiniteQuery } from "@tanstack/react-query";

export type Query = {
  q: string | undefined;
  genre: string;
  limit: number;
  skip: number;
  order_by: string;

  user_age: number;
  sex: "F" | "M";
  viewed_movie_ids: number[];
};

const searchMovies = (query: Query) => {
  return useInfiniteQuery<FetchMoviesResponse>({
    queryKey: [
      "movie",
      {
        q: query.q,
        genre: query.genre,
        limit: query.limit,
        skip: query.skip,
        order_by: query.order_by,
      },
    ],

    queryFn: async (params) => {
      let results = await searchService.getAll({
        params: {
          ...query,
          skip: ((params.pageParam as number) - 1) * query.limit,
        },
        signal: params.signal,
      });

      const viewed_movie_ids = query.viewed_movie_ids;

      const personalization_params = {
        viewed_movie_ids: viewed_movie_ids,
        suggested_movie_ids: results.results.map((movie) => movie.movie_id),
        user_age: query.user_age,
        sex: query.sex,
      };

      if (
        query.order_by === "personalization" &&
        viewed_movie_ids.length !== 0
      ) {
        const personalized_movies = await recommendationService.get_scores(
          personalization_params
        );
        results = { ...results, results: personalized_movies };
        return results;
      }
      return results;
    },

    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.results.length > 0 ? allPages.length + 1 : undefined;
    },
  });
};

export default searchMovies;
