import { useQuery } from "react-query";

import UserService from "_services/user.service";

const getUsers = async () => {
  const response = await UserService.getUsers();
  return response.data.data;
};

export default function useUsersQuery() {
  return useQuery("users", getUsers);
}
