import { ReactNode } from "react";
import { Box } from "@chakra-ui/react";

interface Props {
  children: ReactNode;
}

const MovieCardContainer = ({ children }: Props) => {
  return (
    <Box borderRadius={10} overflow="hidden" width="100%">
      {children}
    </Box>
  );
};

export default MovieCardContainer;
