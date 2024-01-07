import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Grid,
  GridItem,
  HStack,
  Show,
  Spinner,
  Text,
} from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import MovieGrid from "./components/MovieGrid";
import GenresList from "./components/Genres";
import { useState } from "react";
import SortSelector from "./components/SortSelector";
import MoviesSelected from "./components/MoviesSelected";
import SectionHeading from "./components/SectionHeading";
import Form, { recommendationInput } from "./components/Form";
import GridItemContainer from "./components/GridItemContainer";
import MoviesRecommended from "./components/MoviesRecommended";
import GenresSelector from "./components/GenresSelector";
import SearchInput from "./components/SearchInput";
import searchMovies, { Query } from "./hooks/searchMovies";
import recommendMovies from "./hooks/recommendMovie";
import { Movie } from "./types/movie";

function App() {
  const initInputs: recommendationInput = {
    user_age: 20,
    sex: "M",
    topk: 10,
    movies: [],
    rating_threshold: 4,
  };

  const [recommendationInput, setRecommendationInput] = useState(initInputs);

  const initQuery = {
    genre: "",
    order_by: "relevance",
    q: undefined,
    limit: 30,
    skip: 0,

    user_age: recommendationInput.user_age,
    sex: recommendationInput.sex,
    viewed_movie_ids: recommendationInput.movies.map((movie) => movie.movie_id),
  };

  const {
    data: recommendedMovies,
    isError,
    error: recommendingError,
    refetch,
    isFetching,
  } = recommendMovies({
    user_age: recommendationInput.user_age,
    sex: recommendationInput.sex,
    topk: recommendationInput.topk,
    movie_ids: recommendationInput.movies.map((movie) => movie.movie_id),
    rating_threshold: recommendationInput.rating_threshold,
  });

  const [query, setQuery] = useState<Query>(initQuery);

  const infiniteQueryResult = searchMovies(query);

  const removeMovie = (movie_id: number) => {
    setRecommendationInput({
      ...recommendationInput,
      movies: recommendationInput.movies.filter(
        (movie) => movie.movie_id != movie_id
      ),
    });

    setQuery({
      ...query,
      viewed_movie_ids: query.viewed_movie_ids.filter(
        (current_movie_id) => current_movie_id != movie_id
      ),
    });
  };

  return (
    <Grid
      templateAreas={{
        base: `"nav" 
              "form"
              "recommendation"
              "selection"
              "main"
              `,

        lg: `"nav nav" 
            "aside form"
            "aside recommendation"
            "aside selection"
            "aside main"
            `,
      }}
      templateColumns={{
        base: "1fr",
        lg: "120px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>

      <Show above="lg">
        <GridItem area="aside" paddingLeft={5}>
          <GenresList
            onSelectGenre={(genre) => {
              setQuery({ ...query, genre: genre });
            }}
            selectedGenre={query.genre}
          />
        </GridItem>
      </Show>

      <GridItem area="form" padding={"10px"}>
        <SectionHeading text="Let me know about you" />

        <Form
          query={query}
          setQuery={setQuery}
          recommendationInput={recommendationInput}
          setRecommendationInput={setRecommendationInput}
          refetch={refetch}
        />
      </GridItem>

      <GridItemContainer>
        <GridItem area="recommendation">
          <SectionHeading text="Movies recommended" />

          {isError && (
            <Alert status="error" padding={"10px"}>
              <AlertIcon />
              <AlertTitle>Error:</AlertTitle>
              <AlertDescription>{recommendingError.message}</AlertDescription>
            </Alert>
          )}

          {isFetching && recommendationInput.movies.length !== 0 && (
            <HStack>
              <Alert status="info">
                <Spinner
                  thickness="3px"
                  speed="0.65s"
                  emptyColor="gray.200"
                  color="blue.500"
                  size="lg"
                />
                <Text paddingLeft="5px">
                  It's Recommending. Please wait a few seconds!
                </Text>
              </Alert>
            </HStack>
          )}

          {removeMovie.length !== 0 && (
            <MoviesRecommended
              recommendedMovies={recommendedMovies}
              isRecommending={isFetching}
            />
          )}
        </GridItem>
      </GridItemContainer>

      {recommendationInput.movies?.length != 0 && (
        <GridItemContainer>
          <GridItem area="selection">
            <SectionHeading text="Movies selected" />
            <MoviesSelected
              selectedMovies={recommendationInput.movies}
              removeMovie={removeMovie}
            />
          </GridItem>
        </GridItemContainer>
      )}

      <GridItemContainer>
        <GridItem area="main">
          <SectionHeading text="Find and click movies you've watched" />

          <HStack>
            <SearchInput
              onSearch={(q) => {
                setQuery({ ...query, q: q });
              }}
            />
            <GenresSelector
              selectedGenre={query.genre}
              onSelectGenre={(genre) => {
                setQuery({ ...query, genre: genre });
              }}
            />
            <SortSelector
              Orderby={query.order_by}
              OnOrderBy={(order_by) => {
                setQuery({ ...query, order_by: order_by });
              }}
            />
          </HStack>

          <MovieGrid
            selectedGenre={query.genre}
            infiniteQueryResult={infiniteQueryResult}
            addMovie={(movie: Movie) => {
              const movie_ids = recommendationInput.movies.map(
                (movie) => movie.movie_id
              );

              if (!movie_ids.includes(movie.movie_id)) {
                setRecommendationInput({
                  ...recommendationInput,
                  movies: [...recommendationInput.movies, movie],
                });

                setQuery({
                  ...query,
                  viewed_movie_ids: [...query.viewed_movie_ids, movie.movie_id],
                });
              }
            }}
          />
        </GridItem>
      </GridItemContainer>
    </Grid>
  );
}

export default App;
