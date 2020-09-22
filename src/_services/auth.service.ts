import { axiosInstance } from "./base";

import { User } from "@/global/types";

const signIn = (email: string, password: string) => {
  return axiosInstance.post("/user/login", { email, password });
};

const SignUp = (data: User) => {
  return axiosInstance.post("/user", data);
};

export default {
  signIn,
  SignUp,
};
