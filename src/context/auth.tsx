import React, { createContext, useReducer, useContext } from "react";
import jwtDecode from "jwt-decode";

import { User } from "@/global/types";

type Dispatch = ({ type, payload }: { type: any; payload?: string }) => void;

const AuthStateContext = createContext<{ user: User | string }>({ user: {} });
const AuthDispatchContext = createContext<Dispatch>(() => {});

let user: User = null as any;

// reload or refresh
const token = localStorage.getItem("token");
if (token) {
  const decodedToken: User = jwtDecode(token);

  const expiresAt = new Date(decodedToken.exp! * 1000);

  if (new Date() > expiresAt) {
    localStorage.removeItem("token");
  } else {
    user = decodedToken;
  }
} else console.log("No token found");

type Action = { type: "LOGIN"; payload: string } | { type: "LOGOUT" };

type State = {
  user: User | string;
};

const authReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("token", action.payload);
      return {
        ...state,
        user: action.payload,
      };
    case "LOGOUT":
      localStorage.removeItem("token");
      return {
        ...state,
        user: null as any,
      };
    default:
      throw new Error(`Unknown action type`);
  }
};

export const AuthProvider = ({ children }: { children: any }) => {
  const [state, dispatch] = useReducer(authReducer, { user });

  return (
    <AuthDispatchContext.Provider value={dispatch}>
      <AuthStateContext.Provider value={state}>
        {children}
      </AuthStateContext.Provider>
    </AuthDispatchContext.Provider>
  );
};

export const useAuthState = () => useContext(AuthStateContext);
export const useAuthDispatch = () => useContext(AuthDispatchContext);
