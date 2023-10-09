import { SimpleGrid } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const MovieGridContainer = ({ children }: Props) => {
  return (
    <SimpleGrid
      columns={{ base: 2, sm: 3, md: 5, lg: 8, xl: 10 }}
      spacing={2}
      paddingTop="10px"
      paddingRight="5px"
    >
      {children}
    </SimpleGrid>
  );
};

export default MovieGridContainer;
