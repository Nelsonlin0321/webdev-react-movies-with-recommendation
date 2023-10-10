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
import useMovie from "./hooks/useMovie";
import MoviesSelected from "./components/MoviesSelected";
import { Movie } from "./hooks/useMovie";
import SectionHeading from "./components/SectionHeading";
import Form from "./components/Form";
import GridItemContainer from "./components/GridItemContainer";
import MoviesRecommended from "./components/MoviesRecommended";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<string>("");
  const [selectedOrderBy, setSelectedOrderBy] = useState<string>("");
  const [selectedMovies, setSelectedMovies] = useState<Movie[]>([]);
  const [recommendedMovies, setRecommendedMovies] = useState<Movie[]>([]);
  const [isRecommending, setIsRecommending] = useState(false);
  const [recommendingError, setRecommendingError] = useState("");

  const { movies, error, isLoading } = useMovie(
    {
      params: { genre: selectedGenre, order_by: selectedOrderBy },
    },
    [selectedGenre, selectedOrderBy]
  );

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
            onSelectGenre={setSelectedGenre}
            selectedGenre={selectedGenre}
          />
        </GridItem>
      </Show>

      <GridItem area="form" paddingLeft={"10px"}>
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

      <GridItem area="main" paddingLeft={"10px"}>
        <SectionHeading text="Find and click movies you've watched" />
        <SortSelector
          OnOrderBy={setSelectedOrderBy}
          Orderby={selectedOrderBy}
        />

        <MovieGrid
          selectedGenre={selectedGenre}
          movies={movies}
          error={error}
          isLoading={isLoading}
          addMovie={(movie: Movie) => {
            const movie_ids = selectedMovies.map((movie) => movie.movie_id);
            if (!movie_ids.includes(movie.movie_id)) {
              setSelectedMovies([...selectedMovies, movie]);
            }
          }}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
