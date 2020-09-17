import { axiosInstance } from "./base";

import { User } from "@/global/types";

export function signIn(email: string, password: string) {
  return axiosInstance.post("/user/login", { email, password });
}

export function SignUp(data: User) {
  return axiosInstance.post("/user", data);
}

export const AuthService = {
  signIn,
  SignUp,
};

export default AuthService;
