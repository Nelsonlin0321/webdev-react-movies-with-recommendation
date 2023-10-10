import { SimpleGrid } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const MovieGridContainer = ({ children }: Props) => {
  return (
    <SimpleGrid
      columns={{ base: 4, sm: 5, md: 6, lg: 8, xl: 10 }}
      spacing="4px"
      paddingTop="10px"
      paddingRight="5px"
    >
      {children}
    </SimpleGrid>
  );
};

export default MovieGridContainer;
