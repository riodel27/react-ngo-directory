import { axiosInstance } from "./base";

const getOrganizations = () => {
  return axiosInstance.get("/organizations");
};

export default { getOrganizations };
