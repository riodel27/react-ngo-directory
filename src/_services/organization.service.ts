import { axiosInstance } from "./base";

const getOrganizations = () => {
  return axiosInstance.get("/organizations");
};

const createOrganization = () => {
  return axiosInstance.post("/organizations");
};

export default { getOrganizations, createOrganization };
