import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import { FormEvent } from "react";

const Form = () => {
  const handelSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log("Submitted!");
  };

  return (
    <Box paddingBottom={4}>
      <form onSubmit={handelSubmit}>
        <FormControl>
          <HStack alignItems={"end"}>
            <Box paddingRight={"10px"}>
              <FormLabel>Age</FormLabel>
              <NumberInput defaultValue={25} min={18} max={60}>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </Box>
            <Box>
              <FormLabel as="legend">Gender</FormLabel>
              <RadioGroup defaultValue="M">
                <HStack spacing="24px">
                  <Radio value="M">Male</Radio>
                  <Radio value="F">Female</Radio>
                </HStack>
              </RadioGroup>
            </Box>
            <Box paddingRight={"10px"}>
              <Button colorScheme="facebook" type="submit">
                Recommend
              </Button>
            </Box>
          </HStack>
        </FormControl>
      </form>
    </Box>
  );
};

export default Form;
