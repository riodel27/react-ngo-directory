import { axiosInstance } from "./base";

const getUsers = () => {
  return axiosInstance.get("/users");
};

export default { getUsers };
