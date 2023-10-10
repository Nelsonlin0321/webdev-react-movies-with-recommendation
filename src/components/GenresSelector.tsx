import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import genres from "../data/genres";

interface Props {
  selectedGenre: String | null;
  onSelectGenre: (genre: string) => void;
}

const GenresSelector = ({ selectedGenre, onSelectGenre }: Props) => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedGenre || "Genres"}
      </MenuButton>
      <MenuList>
        {genres.map((genre) => (
          <MenuItem
            onClick={() => onSelectGenre(genre === "All" ? "" : genre)}
            key={genre}
          >
            {genre}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default GenresSelector;
