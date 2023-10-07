import { HStack } from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justify="space-between" padding="10px">
      <GiHamburgerMenu size="40" />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
