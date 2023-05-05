import axios from "axios";

export const createDataRequest = async (data) =>
  await axios.post("http://localhost:4000", data);
