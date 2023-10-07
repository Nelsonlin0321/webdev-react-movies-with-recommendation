import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import MovieGrid from "./components/MovieGrid";

function App() {
  return (
    <Grid
      templateAreas={`"nav nav" 
                      "aside recommendation"
                      "aside main"`}
      gridTemplateColumns={"150px 1fr"}
    >
      <GridItem area="nav" bg="coral">
        <NavBar />
      </GridItem>

      <GridItem area="aside" bg="gold">
        Aside
      </GridItem>

      <GridItem area="recommendation" bg="blue">
        Recommendation
      </GridItem>

      <GridItem area="main">
        <MovieGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
