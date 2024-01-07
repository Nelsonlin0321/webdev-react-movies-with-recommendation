import axios from "axios";
import {
  Movie,
  personalizationInputs,
  recommendationInputs,
} from "../types/movie";

const URL = "https://7jufjyexya.execute-api.ap-southeast-1.amazonaws.com/prod";

const axiosInstance = axios.create({
  baseURL: `${URL}`,
});

class APIClient {
  recommend = async (data: recommendationInputs) => {
    const res = await axiosInstance.post<Movie[]>("/recommend", data);
    return res.data;
  };

  get_scores = async (data: personalizationInputs) => {
    const res = await axiosInstance.post<Movie[]>("/get_scores", data);
    return res.data;
  };
}

export default APIClient;
