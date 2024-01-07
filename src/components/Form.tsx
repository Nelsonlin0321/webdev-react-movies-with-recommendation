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
  Wrap,
} from "@chakra-ui/react";
import { FieldValues, useForm } from "react-hook-form";
import Movie from "../types/movie";
import { RefetchOptions, QueryObserverResult } from "@tanstack/react-query";
import toast, { Toaster } from "react-hot-toast";

export type recommendationInput = {
  user_age: number;
  sex: "M" | "F";
  topk: number;
  movies: Movie[];
  rating_threshold: number;
};

interface Props {
  recommendationInput: recommendationInput;
  setRecommendationInput: (recommendationInput: recommendationInput) => void;
  refetch: (
    options?: RefetchOptions | undefined
  ) => Promise<QueryObserverResult<Movie[], Error>>;
}

const Form = ({
  recommendationInput,
  setRecommendationInput,
  refetch,
}: Props) => {
  const { handleSubmit, register } = useForm();

  const submitHandler = (data: FieldValues) => {
    if (recommendationInput.movies.length == 0) {
      toast.error("please select at least one movie you've watched!");
      return;
    }

    const params = {
      user_age: parseInt(data.user_age),
      sex: data.sex,
      topk: 10,
      movies: recommendationInput.movies,
      rating_threshold: 4,
    };

    setRecommendationInput(params);
    refetch();
  };

  return (
    <Box paddingBottom={4}>
      <form onSubmit={handleSubmit(submitHandler)}>
        <FormControl>
          <Wrap align="center">
            <Box paddingRight={"10px"}>
              <FormLabel htmlFor="user_age">Age</FormLabel>
              <NumberInput defaultValue={25} min={18} max={60}>
                <NumberInputField {...register("user_age")} />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </Box>
            <Box>
              <FormLabel as="legend" htmlFor="sex">
                Gender
              </FormLabel>
              <RadioGroup defaultValue="M">
                <HStack spacing="20px">
                  <Radio value="M" {...register("sex")}>
                    Male
                  </Radio>
                  <Radio value="F" {...register("sex")}>
                    Female
                  </Radio>
                </HStack>
              </RadioGroup>
            </Box>
            <Wrap paddingLeft={"5px"}>
              <Button colorScheme="facebook" type="submit">
                Recommend
              </Button>
              <Button
                colorScheme="facebook"
                variant="outline"
                onClick={() => {
                  setRecommendationInput({
                    ...recommendationInput,
                    movies: [],
                  });
                }}
              >
                Clear Selection
              </Button>
            </Wrap>
          </Wrap>
        </FormControl>
      </form>
      <Toaster />
    </Box>
  );
};

export default Form;
