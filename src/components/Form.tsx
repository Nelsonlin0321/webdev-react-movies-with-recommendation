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
import { Movie } from "../hooks/useMovie";
import apiRecommender from "../services/api-recommender";
import { CanceledError } from "axios";

interface Props {
  selectedMovies: Movie[];
  setRecommendedMovies: (movies: Movie[]) => void;
  setIsRecommending: (isRecommending: boolean) => void;
  setRecommendingError: (error: string) => void;
  cancelSection: (movies: Movie[]) => void;
}

const Form = ({
  selectedMovies,
  setRecommendedMovies,
  setIsRecommending,
  setRecommendingError,
  cancelSection,
}: Props) => {
  const { handleSubmit, register } = useForm();

  const submitHandler = (data: FieldValues) => {
    const movie_ids = selectedMovies.map((movie) => movie.movie_id);

    if (movie_ids.length == 0) {
      setRecommendingError("please select at least one movie you've watched!");
      return;
    }
    setIsRecommending(true);
    setRecommendedMovies([]);
    const params = {
      user_age: parseInt(data.user_age),
      sex: data.sex,
      topk: 10,
      movie_ids: movie_ids,
      rating_threshold: 4,
    };
    setRecommendingError("");
    apiRecommender
      .post<Movie[]>("/recommend", params)
      .then((res) => {
        setRecommendedMovies(res.data);
        setIsRecommending(false);
      })
      .catch((err) => {
        if (!(err instanceof CanceledError)) {
          setRecommendingError(err.message);
          setIsRecommending(false);
        }
      });
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
                onClick={() => cancelSection([])}
              >
                Clear Selection
              </Button>
            </Wrap>
          </Wrap>
        </FormControl>
      </form>
    </Box>
  );
};

export default Form;
