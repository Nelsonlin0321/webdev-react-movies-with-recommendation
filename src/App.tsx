import { Grid, GridItem } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={`"nav nav" 
                      "aside recommendation"
                      "aside main"`}
    >
      <GridItem area="nav" bg="coral">
        Nav
      </GridItem>

      <GridItem area="aside" bg="gold">
        Aside
      </GridItem>

      <GridItem area="recommendation" bg="blue">
        Recommendation
      </GridItem>

      <GridItem area="main" bg="pink.300">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
