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
import { FieldValues, useForm } from "react-hook-form";

const Form = () => {
  const { handleSubmit, register } = useForm();

  const submitHandler = (data: FieldValues) => console.log(data);

  return (
    <Box paddingBottom={4}>
      <form onSubmit={handleSubmit(submitHandler)}>
        <FormControl>
          <HStack alignItems={"end"}>
            <Box paddingRight={"10px"}>
              <FormLabel htmlFor="age">Age</FormLabel>
              <NumberInput defaultValue={25} min={18} max={60}>
                <NumberInputField {...register("age")} />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </Box>
            <Box>
              <FormLabel as="legend" htmlFor="gender">
                Gender
              </FormLabel>
              <RadioGroup defaultValue="M">
                <HStack spacing="20px">
                  <Radio value="M" {...register("gender")}>
                    Male
                  </Radio>
                  <Radio value="F" {...register("gender")}>
                    Female
                  </Radio>
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
