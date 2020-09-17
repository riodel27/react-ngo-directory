import { createContext } from "react";

import { User } from "@/global/types";

export type IAuthContext = {
  authenticated: boolean;
  setAuthenticated: (isAuthenticated: boolean) => void;
  setUser: (user: any) => void;
  user: User;
  token: string;
};

const noop = () => {};

export const AuthContext = createContext<IAuthContext>({
  authenticated: false,
  setAuthenticated: noop,
  setUser: noop,
  user: {},
  token: "",
});
