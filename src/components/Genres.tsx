import { Button, List, ListItem, Text } from "@chakra-ui/react";
import genres from "../data/genres";

interface Props {
  selectedGenre: String | null;
  onSelectGenre: (genre: string) => void;
}

const GenresList = ({ selectedGenre, onSelectGenre }: Props) => {
  return (
    <List>
      {genres.map((genre) => (
        <ListItem key={genre} paddingY="5px">
          <Button
            fontSize="base"
            variant="link"
            textAlign="left"
            whiteSpace="normal"
            fontWeight={genre === selectedGenre ? "bold" : "normal"}
            onClick={() => onSelectGenre(genre === "All" ? "" : genre)}
          >
            <Text>{genre}</Text>
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

export default GenresList;
