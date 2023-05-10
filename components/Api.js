import axios from "axios";

export default axios.create({
  baseURL: "http://192.168.49.218:5000/api",
});
