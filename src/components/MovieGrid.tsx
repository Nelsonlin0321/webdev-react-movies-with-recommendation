import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Button,
} from "@chakra-ui/react";
import MovieCardSkeleton from "./MovieCardSkeleton";
import MovieCard from "./MovieCard";
import { FetchMoviesResponse, Movie } from "../services/searchService";
import MovieGridContainer from "./MovieGridContainer";
import { UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query";
import React from "react";
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
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = infiniteQueryResult;

  // setIsFirstLoad(false);

  return (
    <>
      {isError && (
        <Alert status="error" marginTop={"5"}>
          <AlertIcon />
          <AlertTitle>Error:</AlertTitle>
          <AlertDescription>{error.message}</AlertDescription>
        </Alert>
      )}

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
        <Button
          onClick={() => {
            fetchNextPage();
          }}
          disabled={isFetchingNextPage || !hasNextPage}
        >
          {isFetchingNextPage ? "Loading..." : "Show More"}
        </Button>
      </MovieGridContainer>
    </>
  );
};

export default MovieGrid;
