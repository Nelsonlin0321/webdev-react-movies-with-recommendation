import axios from "axios";

const URL = "https://jh9d4gng3e.execute-api.ap-southeast-1.amazonaws.com/prod";
// const URL = "http://localhost:8000";

const axiosInstance = axios.create({
  baseURL: `${URL}/api/v1`,
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = async (config?: any) => {
    const res = await axiosInstance.get<T>(this.endpoint, config);
    return res.data;
  };
}

export default APIClient;
