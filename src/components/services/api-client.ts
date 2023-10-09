import axios from "axios";

export default axios.create({
    baseURL: "https://jh9d4gng3e.execute-api.ap-southeast-1.amazonaws.com/prod/api/v1",
    params: {
        page_size:30
    }
    }
)