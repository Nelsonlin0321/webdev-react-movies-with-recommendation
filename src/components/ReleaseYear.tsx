import { Badge } from "@chakra-ui/react";

interface Props {
  release_year: number;
}

const ReleaseYear = ({ release_year }: Props) => {
  return (
    <Badge borderRadius="5px" fontSize="14px" paddingX={2}>
      {release_year}
    </Badge>
  );
};

export default ReleaseYear;
