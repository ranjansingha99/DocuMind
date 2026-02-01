import axios from "axios";

const api = axios.create(
    {
        baseURL: "https://documind.github.io"
    }
)

export default api;