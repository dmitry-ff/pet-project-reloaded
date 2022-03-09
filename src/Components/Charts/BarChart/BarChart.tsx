import { Bar } from "react-chartjs-2";
import ChartWrapper from '../ChartWrapper'
import { TUserData } from "../../../Data/Types/TUserData";

import React from 'react'
import { EmotionJSX } from "@emotion/react/types/jsx-namespace";

const BarChart: React.FC<TUserData> = ({ data }): EmotionJSX.Element => {
  return (
    <ChartWrapper>
      <Bar data={data} />
    </ChartWrapper>
  )
}

export default BarChart