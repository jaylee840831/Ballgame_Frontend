export interface LoginPost {
  email: string;
  password: string;
}

export interface LoginResponse {
  name: string;
  status: number;
  jwt: string;
  message: string;
}

export interface RegisterPost {
  name: string;
  email: string;
  password: string;
}
