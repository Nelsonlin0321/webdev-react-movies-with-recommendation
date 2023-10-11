import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GridItemContainer = ({ children }: Props) => {
  return <Box padding="10px">{children}</Box>;
};

export default GridItemContainer;
