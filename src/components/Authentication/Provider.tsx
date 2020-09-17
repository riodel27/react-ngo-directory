import React, { useState, useEffect, useMemo } from "react";

import { User } from "@/global/types";
import { AuthContext } from "./Context";
import { useLocalStorage } from "_libs/hooksLib";

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

  const [token, _] = useLocalStorage("globedrop", "");
  const [user_id, __] = useLocalStorage("user_id", "");

  useEffect(() => {
    if (token) {
      setAuthenticated(true);
    }
  }, [token, user_id]);

  // todo: api call for getting user data

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
