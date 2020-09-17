export type User = {
  email?: string;
  password?: string;
  username?: string;
  name?: string;
  language?: string;
  country?: string;
  ngoAdmin?: boolean;
  userType?: string;
  token?: string;
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
