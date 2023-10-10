import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  OnOrderBy: (OrderBy: string) => void;
  Orderby: string;
}

const SortFieldMap: { [key: string]: string } = {
  release_year: "Release Year",
  rating: "Rating",
};

const SortSelector = ({ OnOrderBy, Orderby }: Props) => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order By: {Orderby ? SortFieldMap[Orderby] : "Release Year"}
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => OnOrderBy("release_year")}>
          Release Year
        </MenuItem>
        <MenuItem onClick={() => OnOrderBy("rating")}>Rating</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
