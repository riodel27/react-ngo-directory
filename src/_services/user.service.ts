import { axiosInstance } from "./base";
import { getAuthSession } from "_libs/auth.helper";

const getUsers = () => {
  const headers = { Authorization: `Bearer ${getAuthSession()}` };
  return axiosInstance.get("/users", { headers });
};

export default { getUsers };
