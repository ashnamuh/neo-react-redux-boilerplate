import axios, { AxiosError } from 'axios'
import { API_URL } from 'constants/env'

export interface ApiResponse<T> {
  data: T;
  err: number;
  msg: string;
  url: string;
}

const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
})

api.interceptors.response.use((response) => {
  return response
}, (error: AxiosError) => {
  console.error(error)
})

export default api
