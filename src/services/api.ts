import API from "./axios";
import { AxiosRequestConfig, AxiosError } from "axios";

export async function request<T = unknown>(
  config: AxiosRequestConfig
): Promise<{ success: boolean; data?: T; error?: { status?: number; message: string; data?: unknown } }> {
  try {
    const response = await API.request<T>({ ...config });
    return { success: true, data: response.data };
  } catch (error: unknown) {
    const axiosError = error as AxiosError;

    return {
      success: false,
      error: {
        status: axiosError.response?.status,
        message: axiosError.response?.data && typeof axiosError.response.data === 'object' && 'message' in (axiosError.response.data as Record<string, unknown>) ? (axiosError.response.data as Record<string, unknown>).message as string : "Something went wrong",
        data: axiosError.response?.data && typeof axiosError.response.data === 'object' && 'data' in axiosError.response.data ? axiosError.response.data.data : null,
      },
    };
  }
}
