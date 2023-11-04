import { HStack, Heading } from "@chakra-ui/react";
import { RiMovie2Line } from "react-icons/ri";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justify="space-between" padding="30px" paddingBottom="0px">
      <RiMovie2Line size="40" />
      <Heading
        backgroundImage="linear-gradient(to bottom, #553c9a, #b393d3)"
        backgroundClip="text"
      >
        Movielens Interactive Recommendation System
      </Heading>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
