import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Spinner,
} from "@chakra-ui/react";
import MovieCardSkeleton from "./MovieCardSkeleton";
import MovieCard from "./MovieCard";
import { FetchMoviesResponse } from "../services/searchService";
import { Movie } from "../types/movie";
import MovieGridContainer from "./MovieGridContainer";
import { UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

interface Props {
  selectedGenre: string;
  infiniteQueryResult: UseInfiniteQueryResult<
    InfiniteData<FetchMoviesResponse, unknown>,
    Error
  >;
  addMovie: (movie: Movie) => void;
}

const MovieGrid = ({ selectedGenre, infiniteQueryResult, addMovie }: Props) => {
  selectedGenre = selectedGenre === "All" ? "" : selectedGenre;

  const numberOfSkeleton = 30;
  const skeletons: number[] = [];
  for (let i = 0; i < numberOfSkeleton; i++) {
    skeletons.push(i);
  }

  const {
    status,
    isError,
    error,
    data: MoviesResponseList,
    // isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = infiniteQueryResult;

  // setIsFirstLoad(false);

  const fetchedMovieCount =
    MoviesResponseList?.pages.reduce(
      (total, page) => total + page.results.length,
      0
    ) || 0;

  return (
    <>
      {isError && (
        <Alert status="error" marginTop={"5"}>
          <AlertIcon />
          <AlertTitle>Error:</AlertTitle>
          <AlertDescription>{error.message}</AlertDescription>
        </Alert>
      )}
      <InfiniteScroll
        dataLength={fetchedMovieCount}
        hasMore={hasNextPage}
        next={() => fetchNextPage()}
        loader={<Spinner />}
      >
        <MovieGridContainer>
          {status === "pending" &&
            skeletons.map((skeleton) => <MovieCardSkeleton key={skeleton} />)}
          {MoviesResponseList?.pages.map((page, index) => (
            <React.Fragment key={index}>
              {page.results.map((movie) => (
                <MovieCard
                  addMovie={addMovie}
                  key={movie.movie_id}
                  movie={movie}
                  imageClassName="image-card"
                />
              ))}
            </React.Fragment>
          ))}
        </MovieGridContainer>
      </InfiniteScroll>
      {/* <Button
        onClick={() => {
          fetchNextPage();
        }}
        disabled={isFetchingNextPage || !hasNextPage}
      >
        {isFetchingNextPage ? "Loading..." : "Show More"}
      </Button> */}
    </>
  );
};

export default MovieGrid;
