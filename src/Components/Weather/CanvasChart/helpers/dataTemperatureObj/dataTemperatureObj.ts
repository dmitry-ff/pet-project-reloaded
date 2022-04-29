import { TData } from "../../../types";

export const dataTemperatureObj = (data: TData[]) => {
  return {
    minT: data.map(item => {
      let temp = item.day.mintemp_c;
      return Math.floor(temp);
    }),
    maxT: data.map(item => {
      return Math.floor(item.day.maxtemp_c);
    }),
    avgT: data.map(item => {
      return Math.floor(item.day.avgtemp_c);
    }),
  }
}