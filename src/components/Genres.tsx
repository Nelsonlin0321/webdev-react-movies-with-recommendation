import { Button, List, ListItem, Text, Heading } from "@chakra-ui/react";
import genres from "../data/genres";

interface Props {
  selectedGenre: String | null;
  onSelectGenre: (genre: string) => void;
}

const GenresList = ({ selectedGenre, onSelectGenre }: Props) => {
  return (
    <>
      <Heading fontSize="lg" marginBottom={3}>
        Genres
      </Heading>
      <List paddingLeft="0px">
        {genres.map((genre) => (
          <ListItem key={genre}>
            <Button
              fontSize="base"
              variant="link"
              textAlign="left"
              whiteSpace="normal"
              fontWeight={genre === selectedGenre ? "bold" : "normal"}
              onClick={() => onSelectGenre(genre === "All" ? "" : genre)}
            >
              <Text marginBottom={"5px"}>{genre}</Text>
            </Button>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenresList;
