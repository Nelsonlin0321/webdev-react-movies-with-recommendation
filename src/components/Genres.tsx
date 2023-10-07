import { HStack, List, ListItem, Text } from "@chakra-ui/react";
import genres from "../data/genres";
const GenresList = () => {
  return (
    <List>
      {genres.map((genre) => (
        <ListItem key={genre} paddingY="5px">
          <HStack>
            <Text fontSize="lg">{genre}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenresList;
