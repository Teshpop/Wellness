import axios from "axios";

export const createDataRequest = async (data) =>
  await axios.post("http://localhost:4000", data);

export const getDataRequest = async (data) =>
  await axios.get("http://localhost:4000", data);
