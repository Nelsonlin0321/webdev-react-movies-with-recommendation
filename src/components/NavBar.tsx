import { HStack } from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justify="space-between" paddingLeft="30px">
      <GiHamburgerMenu size="40" />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
