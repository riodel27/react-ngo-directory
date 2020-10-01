export type User = {
  _id?: string;
  email?: string;
  password?: string;
  username?: string;
  name?: string;
  language?: string;
  country?: string;
  ngoAdmin?: boolean;
  userType?: string;
  method?: string;
  createdAt?: string;
  updated?: string;
  exp?: number;
  iat?: number;
  organizations?: [];
};

export type UserForm = {
  email: string;
  password: string;
  username?: string;
  name?: string;
  language?: string;
  country?: string;
  ngoAdmin?: boolean;
  userType?: string;
};

export type OrganizationInput = {
  id?: "";
  org_name?: "";
  org_description?: "";
  org_city?: "";
  org_country?: "";
  org_picture?: "";
};

export type AuthReducerAction =
  | { type: "LOGIN"; payload: string }
  | { type: "LOGOUT" };

export type AuthState = {
  // user: User | string;
  user: User;
};

export type DispatchContext = ({
  type,
  payload,
}: {
  type: any;
  payload?: string;
}) => void;
