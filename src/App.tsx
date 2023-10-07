import { Grid, GridItem, Box } from "@chakra-ui/react";
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

function App() {
  const [selectedGenre, setSelectedGenre] = useState<string>("");
  const [selectedOrderBy, setSelectedOrderBy] = useState<string>("");
  const [selectedMovies, setSelectedMovies] = useState<Movie[]>([]);

  const { movies, error, isLoading } = useMovie(
    {
      params: { genre: selectedGenre, order_by: selectedOrderBy },
    },
    [selectedGenre, selectedOrderBy]
  );

  return (
    <Grid
      templateAreas={`"nav nav" 
                      "aside form"
                      "aside recommendation"
                      "aside selection"
                      "aside main"
                      `}
      gridTemplateColumns={"120px 1fr"}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>

      <GridItem area="aside" paddingLeft={5}>
        <GenresList
          onSelectGenre={setSelectedGenre}
          selectedGenre={selectedGenre}
        />
      </GridItem>

      <GridItem area="form" paddingLeft={5}>
        <SectionHeading text="Let me know about you" />
        <Form />
      </GridItem>

      {selectedMovies.length != 0 && (
        <GridItem area="selection">
          <Box paddingLeft="10px">
            <SectionHeading text="Which movies selected" />
            <MoviesSelected selectedMovies={selectedMovies} />
          </Box>
        </GridItem>
      )}

      <GridItem area="main">
        <Box paddingLeft="10px">
          <SectionHeading text="Find and click movies you like" />
          <SortSelector
            OnOrderBy={setSelectedOrderBy}
            Orderby={selectedOrderBy}
          />
        </Box>

        <MovieGrid
          selectedGenre={selectedGenre}
          movies={movies}
          error={error}
          isLoading={isLoading}
          addMovie={(movie: Movie) =>
            setSelectedMovies([...selectedMovies, movie])
          }
        />
      </GridItem>
    </Grid>
  );
}

export default App;
