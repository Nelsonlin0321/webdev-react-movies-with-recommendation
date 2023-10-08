import { HStack, Switch, useColorMode, Text } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        colorScheme="green"
        isChecked={colorMode == "dark"}
        onChange={() => toggleColorMode()}
      ></Switch>
      <Text margin={0}>
        {colorMode === "dark" ? "Dark Mode" : "Light Mode"}
      </Text>
    </HStack>
  );
};

export default ColorModeSwitch;
