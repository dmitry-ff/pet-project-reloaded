import axios from "axios";

export function fetchData<T>(url: string) {
  return axios.get<T>(url)
} 