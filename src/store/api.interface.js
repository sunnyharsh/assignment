import axios from "axios";

const apiInterface = axios.create({
    baseURL: "http://www.omdbapi.com"
});

export default apiInterface;