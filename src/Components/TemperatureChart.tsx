import _ from "lodash";
import React from "react";
import { MONTH_S } from "../Data/Consts";
import { Chart as ChartJS } from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import { TData, TLoading } from '../Data/Types';
import { EmotionJSX } from "@emotion/react/types/jsx-namespace";

const TemperatureChart: React.FC<TLoading & TData> = ({ loading, data }): EmotionJSX.Element => {

  const [chartData, setData] = React.useState({
    labels: _.map(data, item => {
      return `${MONTH_S[new Date(item.date).getMonth()]}, ${new Date(item.date).getDate()}`
    }),
    datasets: [
      {
        label: 'max t, °C',
        data: _.map(data, item => {
          return item.day.maxtemp_c;
        }),
        backgroundColor: 'rgba(222, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 2,
      },
      {
        label: 'avg t, °C',
        data: _.map(data, item => {
          return (item.day.maxtemp_c + item.day.mintemp_c) / 2;
        }),
        backgroundColor: 'rgba(48, 207, 113,0.2)',
        borderColor: 'rgba(48, 207, 113,1)',
        borderWidth: 2,
      },
      {
        label: 'min t, °C',
        data: _.map(data, item => {
          return item.day.mintemp_c;
        }),
        backgroundColor: 'rgba(1, 99, 132, 0.2)',
        borderColor: 'rgba(1, 99, 132, 1)',
        borderWidth: 2,
      },
    ],
  });

  return <>{!loading && <Line data={chartData} />
  }</>
}

export default TemperatureChart;
// export { };