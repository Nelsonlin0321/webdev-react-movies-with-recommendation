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
import { Movie } from "../hooks/useMovie";
import apiRecommender from "./services/api-recommender";

interface Props {
  selectedMovies: Movie[];
  setRecommendedMovies: (movies: Movie[]) => void;
}

const Form = ({ selectedMovies, setRecommendedMovies }: Props) => {
  const { handleSubmit, register } = useForm();

  const submitHandler = (data: FieldValues) => {
    const movie_ids = selectedMovies.map((movie) => movie.movie_id);
    console.log({
      user_age: parseInt(data.user_age),
      sex: data.sex,
      topk: 10,
      movie_ids: movie_ids,
      rating_threshold: 4.9,
    });
    apiRecommender
      .post("/recommend", {
        ...data,
        topk: 10,
        movie_ids: movie_ids,
      })
      .then((res) => {
        setRecommendedMovies(res.data);
      });
  };

  return (
    <Box paddingBottom={4}>
      <form onSubmit={handleSubmit(submitHandler)}>
        <FormControl>
          <HStack alignItems={"end"}>
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
