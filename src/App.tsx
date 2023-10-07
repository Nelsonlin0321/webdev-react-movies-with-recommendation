import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import MovieGrid from "./components/MovieGrid";
import GenresList from "./components/Genres";
import { useState } from "react";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);

  return (
    <Grid
      templateAreas={`"nav nav" 
                      "aside recommendation"
                      "aside main"`}
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

      <GridItem area="recommendation" bg="blue">
        Recommendation
      </GridItem>

      <GridItem area="main">
        <MovieGrid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
}

export default App;
