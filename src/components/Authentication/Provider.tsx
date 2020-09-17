import React, { useState, useEffect, useMemo } from "react";

import { User } from "@/global/types";
import { AuthContext } from "./Context";
import { useLocalStorage } from "../../_libs/hooksLib";

export type AuthProviderProps = {
  defaultAuthenticated?: boolean;
  defaultUser?: User;
};

export const AuthProvider: React.FC<AuthProviderProps> = ({
  defaultAuthenticated = false,
  defaultUser = {},
  children,
}) => {
  const [authenticated, setAuthenticated] = useState(defaultAuthenticated);
  const [user, setUser] = useState(defaultUser);
  const [token, setToken] = useLocalStorage("user-token", "");

  useEffect(() => {
    // TODO: fix logic here for storing token

    // TODO:fix authenticated and user state will be reset on browser reload or refresh

    if (user && authenticated) {
      setToken(user.token || "");
    }

    if (token) {
      setAuthenticated(true);
    }
  }, [user, authenticated, setToken]);

  // const previousAuthenticated = usePrevious(authenticated);

  const contextValue = useMemo(
    () => ({
      authenticated,
      setAuthenticated,
      setUser,
      user,
      token,
    }),
    [authenticated, user, token, setAuthenticated, setUser]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
