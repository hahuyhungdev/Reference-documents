export type LoginBody = {
  username: string;
  password: string;
};

export type UserResponse = {
  full_name: string;
  email: string;
  phone: string;
  id: string;
  roles: Array<string>;
  following: Array<string>;
  followings: Array<string>;
  updated_at?: Date;
};

export type Token = {
  token_type: string;
  access_token: string;
  expires_in: number;
  refresh_token: string;
  refresh_expires_in: number;
};
