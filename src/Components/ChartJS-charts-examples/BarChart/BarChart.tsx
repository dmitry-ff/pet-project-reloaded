import React from 'react'
import * as Styled from '../ChartWrapper.styled'
import { Bar } from "react-chartjs-2";
import { TUserData } from "../types/TUserData";
import { EmotionJSX } from "@emotion/react/types/jsx-namespace";

const BarChart: React.FC<TUserData> = ({ data }): EmotionJSX.Element => {
  return (
    <Styled.ChartWrapper>
      <Bar data={data} />
    </Styled.ChartWrapper>
  )
}

export default BarChart