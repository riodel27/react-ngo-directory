import jwtDecode from 'jwt-decode';
import React, { createContext, useContext, useReducer } from 'react';

import { AuthReducerAction, AuthState, DispatchContext, User } from '@/global/types';

/* eslint-disable @typescript-eslint/no-empty-function */
const noop = () => {};

const AuthStateContext = createContext<AuthState>({ user: {} });
const AuthDispatchContext = createContext<DispatchContext>(noop);

let user: User = null as any;

const token = localStorage.getItem('token');

if (token) {
   const decodedToken: User = jwtDecode(token);

   const expiresAt = new Date(decodedToken.exp! * 1000);

   if (new Date() > expiresAt) {
      localStorage.removeItem('token');
   } else {
      user = decodedToken;
   }
} else console.log('No token found');

const authReducer = (state: AuthState, action: AuthReducerAction) => {
   switch (action.type) {
      case 'LOGIN':
         localStorage.setItem('token', action.payload);
         return {
            ...state,
            user: action.payload
         };
      case 'LOGOUT':
         localStorage.removeItem('token');
         return {
            ...state,
            user: null as any
         };
      default:
         throw new Error(`Unknown action type`);
   }
};

export const AuthProvider = ({ children }: { children: any }) => {
   const [state, dispatch] = useReducer(authReducer, { user });

   return (
      <AuthDispatchContext.Provider value={dispatch}>
         <AuthStateContext.Provider value={state}>{children}</AuthStateContext.Provider>
      </AuthDispatchContext.Provider>
   );
};

export const useAuthState = () => useContext(AuthStateContext);
export const useAuthDispatch = () => useContext(AuthDispatchContext);
