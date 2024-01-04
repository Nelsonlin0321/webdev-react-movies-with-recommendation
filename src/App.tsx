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
import Form from "./components/Form";
import GridItemContainer from "./components/GridItemContainer";
import MoviesRecommended from "./components/MoviesRecommended";
import GenresSelector from "./components/GenresSelector";
import SearchInput from "./components/SearchInput";
import { Movie } from "./services/searchService";
import searchMovies, { Query } from "./hooks/searchMovie";

function App() {
  const initQuery = {
    genre: "",
    order_by: "relevance",
    q: undefined,
    limit: 30,
    skip: 0,
  };

  const [query, setQuery] = useState<Query>(initQuery);
  const [selectedMovies, setSelectedMovies] = useState<Movie[]>([]);
  const [recommendedMovies, setRecommendedMovies] = useState<Movie[]>([]);
  const [isRecommending, setIsRecommending] = useState(false);
  const [recommendingError, setRecommendingError] = useState("");

  // const { movies, error, isLoading } = useMovie(
  //   {
  //     params: query,
  //   },
  //   [query]
  // );

  const infiniteQueryResult = searchMovies(query);

  const removeMovie = (movie_id: number) => {
    setSelectedMovies(
      selectedMovies.filter((movie) => movie.movie_id != movie_id)
    );
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

      <GridItem area="form" padding={"30px"}>
        <SectionHeading text="Let me know about you" />
        <Form
          selectedMovies={selectedMovies}
          setRecommendedMovies={setRecommendedMovies}
          setIsRecommending={setIsRecommending}
          setRecommendingError={setRecommendingError}
          cancelSection={() => setSelectedMovies([])}
        />
      </GridItem>

      {(recommendedMovies.length != 0 ||
        isRecommending ||
        recommendingError) && (
        <GridItemContainer>
          <GridItem area="recommendation">
            <SectionHeading text="Movies recommended" />

            {recommendingError && (
              <Alert status="error" padding={"10px"}>
                <AlertIcon />
                <AlertTitle>Error:</AlertTitle>
                <AlertDescription>{recommendingError}</AlertDescription>
              </Alert>
            )}

            {isRecommending && (
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
            <MoviesRecommended
              recommendedMovies={recommendedMovies}
              isRecommending={isRecommending}
            />
          </GridItem>
        </GridItemContainer>
      )}

      {selectedMovies.length != 0 && (
        <GridItemContainer>
          <GridItem area="selection">
            <SectionHeading text="Movies selected" />
            <MoviesSelected
              selectedMovies={selectedMovies}
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
              const movie_ids = selectedMovies.map((movie) => movie.movie_id);
              if (!movie_ids.includes(movie.movie_id)) {
                setSelectedMovies([...selectedMovies, movie]);
              }
            }}
          />
        </GridItem>
      </GridItemContainer>
    </Grid>
  );
}

export default App;
