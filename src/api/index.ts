import axios from "axios";
const baseURL = process.env.REACT_APP_API_BASE_URL;

export default axios.create({
    baseURL,
    headers: {
        //'Access-Control-Allow-Origin': '*'
        "Content-Type": "application/json",
    },
});
