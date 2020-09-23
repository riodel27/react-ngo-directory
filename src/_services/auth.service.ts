import { axiosInstance } from "./base";

import { User } from "@/global/types";

const SignIn = (email: string, password: string): Promise<any> => {
  return axiosInstance.post("/user/login", { email, password });
};

const SignUp = async (data: User) => {
  await axiosInstance.post("/user", data);
  return;
};

export default {
  SignIn,
  SignUp,
};
