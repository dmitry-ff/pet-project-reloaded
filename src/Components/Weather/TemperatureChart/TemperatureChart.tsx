import React, { useEffect } from "react";
import { EmotionJSX } from "@emotion/react/types/jsx-namespace";
import { MONTH_S } from "../data/MONTH_S";
import { Line } from 'react-chartjs-2';
import { TData } from "../types/TData";
import { newLineData } from "../../Charts/LineChart/types/TLineData";
import { dataTransform } from "./utils/dataTransform";

const TemperatureChart = (props: { loading: boolean, data: TData[] }): EmotionJSX.Element | null => {
  const [chartData, setData] = React.useState<newLineData | null>(null);
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
// export { };