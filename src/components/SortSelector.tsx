import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { Query } from "../hooks/searchMovies";
import toast, { Toaster } from "react-hot-toast";

interface Props {
  OnOrderBy: (OrderBy: string) => void;
  Orderby: string;
  query: Query;
}

const SortFieldMap: { [key: string]: string } = {
  release_year: "Release Year",
  rating: "Rating",
  relevance: "Relevance",
  personalization: "Your Interest",
};

const SortSelector = ({ OnOrderBy, Orderby, query }: Props) => {
  return (
    <>
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
          <MenuItem
            onClick={() => {
              OnOrderBy("personalization");
              if (query.viewed_movie_ids.length == 0) {
                toast.error(
                  "To better to personalize the search, please click at least one movie you've watched "
                );
              }
            }}
          >
            Your interest
          </MenuItem>
        </MenuList>
      </Menu>
      <Toaster />
    </>
  );
};

export default SortSelector;
