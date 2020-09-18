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
