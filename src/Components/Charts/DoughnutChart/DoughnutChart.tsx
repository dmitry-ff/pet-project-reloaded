import { Doughnut } from 'react-chartjs-2';
import * as Styled from "../ChartWrapper.styled";
import { TUserData } from "../../../Data/Types/TUserData";
import React from 'react';
import { EmotionJSX } from '@emotion/react/types/jsx-namespace';


const DoughnutChart: React.FC<TUserData> = ({ data }): EmotionJSX.Element => {
  return (
    <Styled.ChartWrapper>
      <Doughnut data={data} />
    </Styled.ChartWrapper>
  )
}

export default DoughnutChart