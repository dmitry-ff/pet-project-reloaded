import React, { useEffect } from "react";
import { EmotionJSX } from "@emotion/react/types/jsx-namespace";
import _ from "lodash";
import { MONTH_S } from "../data/MONTH_S";
import { Line } from 'react-chartjs-2';
import { TLoading } from "../types/TLoading";
import { TData } from "../types/TData";
import { newLineData } from "../../Charts/LineChart/types/TLineData";
type TT = {
  date: string,
  day: {
    maxtemp_c: number,
    mintemp_c: number,
    avgtemp_c: number,
    maxwind_kph: number,
    daily_chance_of_rain: number,
    daily_chance_of_snow: number,
    condition: {
      text: string,
      icon: string
    }
  }

}
const TemperatureChart = (props: { loading: boolean, data: TT[] }): EmotionJSX.Element | null => {
  const [chartData, setData] = React.useState<newLineData>();
  const { loading, data } = props;
  useEffect(() => {
    setData({

      labels: data.map((item) => `${MONTH_S[new Date(item.date).getMonth()]}, ${new Date(item.date).getDate()}`),
      datasets: [
        {
          label: 'max t, °C',
          data: _.map(data, item => {
            return item.day.maxtemp_c;
          }),
          backgroundColor: 'rgba(222, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 2,
          tension: 0.3
        },
        {
          label: 'avg t, °C',
          data: _.map(data, item => {
            return (item.day.maxtemp_c + item.day.mintemp_c) / 2;
          }),
          backgroundColor: 'rgba(48, 207, 113,0.2)',
          borderColor: 'rgba(48, 207, 113,1)',
          borderWidth: 2,
          tension: 0.3

        },
        {
          label: 'min t, °C',
          data: _.map(data, item => {
            return item.day.mintemp_c;
          }),
          backgroundColor: 'rgba(1, 99, 132, 0.2)',
          borderColor: 'rgba(1, 99, 132, 1)',
          borderWidth: 2,
          tension: 0.3
        },
      ],
    })
  }, [data])

  if (loading) return null
  if (chartData) {
    return <Line data={chartData} />
  }
  return null;
}

export default TemperatureChart;
// export { };