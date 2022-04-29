import { Bar } from "react-chartjs-2";
import * as Styled from '../ChartWrapper.styled'
import { TUserData } from "../types/TUserData";

import React from 'react'
import { EmotionJSX } from "@emotion/react/types/jsx-namespace";

const BarChart: React.FC<TUserData> = ({ data }): EmotionJSX.Element => {
  return (
    <Styled.ChartWrapper>
      <Bar data={data} />
    </Styled.ChartWrapper>
  )
}

export default BarChart