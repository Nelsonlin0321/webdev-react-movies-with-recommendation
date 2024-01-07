import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  OnOrderBy: (OrderBy: string) => void;
  Orderby: string;
}

const SortFieldMap: { [key: string]: string } = {
  release_year: "Release Year",
  rating: "Rating",
  relevance: "Relevance",
  personalization: "Your Interest",
};

const SortSelector = ({ OnOrderBy, Orderby }: Props) => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order By: {Orderby ? SortFieldMap[Orderby] : "Relevance"}
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => OnOrderBy("relevance")}>Relevance</MenuItem>
        <MenuItem onClick={() => OnOrderBy("release_year")}>
          Release Year
        </MenuItem>
        <MenuItem onClick={() => OnOrderBy("rating")}>Rating</MenuItem>
        <MenuItem onClick={() => OnOrderBy("personalization")}>
          Your interest
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
