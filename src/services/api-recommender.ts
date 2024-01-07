import axios from "axios";

const URL = "https://7jufjyexya.execute-api.ap-southeast-1.amazonaws.com/prod";

const axiosInstance = axios.create({
  baseURL: `${URL}`,
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  recommend = async (data: any) => {
    const res = await axiosInstance.post<T>(this.endpoint, data);
    return res.data;
  };
}

export default APIClient;
