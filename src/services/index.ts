// eslint-disable-next-line prettier/prettier

import type { LoginResponse } from 'src/types';
import { fetchApi } from 'utils/api';

export const login = async (
  email: string,
  password: string,
): Promise<LoginResponse> => {
  return fetchApi<LoginResponse>('/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
};

export const register = async (
  name: string,
  email: string,
  password: string,
) => {
  return fetchApi('/auth/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, password }),
  });
};
