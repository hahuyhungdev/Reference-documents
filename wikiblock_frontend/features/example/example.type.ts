export type UserRole = "admin" | "user";
export type UserStatus = "active" | "inactive";
export type Gender = "male" | "female" | "other";

export interface UserResponse {
  // User ID
  id: string;
  // Full name
  full_name: string;
  // Email
  email: string;
  // Email verified
  email_verified: boolean;
  // Phone number (e.g. +84909******)
  phone: string;
  // User roles (e.g. ["user", "admin"])
  roles: Array<UserRole>;
  // User avatar
  picture?: string;
  // Gender
  gender?: Gender;
  // Date of birth (E.g. 1990-01-31)
  dob?: string;
  // Status
  status: UserStatus;
  // Date and time user was created
  created_at: string;
  // Date and time user was last updated
  updated_at: string;
}

export interface BearerTokens {
  token_type: "bearer";
  access_token: string;
  expires_in: number;
  refresh_token: string;
  refresh_expires_in: number;
}

export type MyAccountType = {
  fullname: string;
  email: string;
  phone: string;
  sex: string;
  date: number;
  month: string;
  year: number;
};

export type ChangePasswordType = {
  password: string;
  repeatPassword: string;
  verifyCode: string;
};

export type SignInInput = {
  id: string;
  password: string;
};

export type ForgotPasswordStep1 = {
  email: string;
};

export type ForgotPassword = {
  password: string;
  repeatPassword: string;
};

export type SignUpInput = {
  full_name: string;
  email: string;
  phone: string;
  password: string;
};

export type SignInResponse = {
  user: UserResponse;
  tokens: BearerTokens;
};

export type SignUpResponse = {
  user: SignInResponse;
};
