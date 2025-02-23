export interface LoginResponse {
  accessToken: string;
  user: {
    id: number;
    email: string;
    name: string;
  };
}

export interface ErrorResponse {
  message: string;
  statusCode: number;
}
