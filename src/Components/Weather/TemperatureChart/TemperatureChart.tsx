import React, { useEffect } from "react";
import { EmotionJSX } from "@emotion/react/types/jsx-namespace";
import { Line } from 'react-chartjs-2';
import { TData } from "../types/TData";
import { TNewLineData } from "../../ChartJS-charts-examples/types";
import { dataTransform } from "./utils/dataTransform";

const TemperatureChart = (props: { loading: boolean, data: TData[] }): EmotionJSX.Element | null => {
  const [chartData, setData] = React.useState<TNewLineData | null>(null);
  const { loading, data } = props;
  useEffect(() => {
    setData(dataTransform(data));
  }, [data])

  if (!loading && chartData) {
    return <Line data={chartData} />
  }
  return null;
}

export default TemperatureChart;