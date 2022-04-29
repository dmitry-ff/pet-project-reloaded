import { MONTH_S } from "../../data/MONTH_S";
import { TData } from "../../types/TData";

export const dataTransform = (data: TData[]) => {
  return {
    labels: data.map((item) => `${MONTH_S[new Date(item.date).getMonth()]}, ${new Date(item.date).getDate()}`),
    datasets: [
      {
        label: 'max t, °C',
        data: data.map(item => {
          return item.day.maxtemp_c;
        }),
        backgroundColor: 'rgba(222, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 2,
        tension: 0.3
      },
      {
        label: 'avg t, °C',
        data: data.map(item => {
          return (item.day.maxtemp_c + item.day.mintemp_c) / 2;
        }),
        backgroundColor: 'rgba(48, 207, 113,0.2)',
        borderColor: 'rgba(48, 207, 113,1)',
        borderWidth: 2,
        tension: 0.3

      },
      {
        label: 'min t, °C',
        data: data.map(item => {
          return item.day.mintemp_c;
        }),
        backgroundColor: 'rgba(1, 99, 132, 0.2)',
        borderColor: 'rgba(1, 99, 132, 1)',
        borderWidth: 2,
        tension: 0.3
      },
    ],
  }
}