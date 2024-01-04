import searchService, { FetchMoviesResponse } from "../services/searchService";
import { useInfiniteQuery } from "@tanstack/react-query";

export type Query = {
  q: string | undefined;
  genre: string;
  limit: number;
  skip: number;
  order_by: string;
};

const searchMovies = (query: Query) => {
  return useInfiniteQuery<FetchMoviesResponse>({
    queryKey: ["movie", query],
    queryFn: (params) =>
      searchService.getAll({
        params: {
          ...query,
          skip: ((params.pageParam as number) - 1) * query.limit,
        },
        signal: params.signal,
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.results.length > 0 ? allPages.length + 1 : undefined;
    },
  });
};

export default searchMovies;
