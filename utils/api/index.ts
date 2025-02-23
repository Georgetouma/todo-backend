import { API_URL } from 'src/config';

export const fetchApi = async <T>(
  endpoint: string,
  options: RequestInit,
  timeout = 5000,
): Promise<T> => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(`${API_URL}${endpoint}`, {
      ...options,
      signal: controller.signal,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response.json() as Promise<T>;
  } catch (error) {
    console.error('API request failed:', error);
    throw error;
  } finally {
    clearTimeout(timeoutId);
  }
};
