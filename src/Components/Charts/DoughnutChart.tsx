import { Doughnut } from 'react-chartjs-2';
import ChartWrapper from "../../Style/ChartWrapper";
import { TUserData } from "../../Data/Types/TUserData";
import React from 'react';
import { EmotionJSX } from '@emotion/react/types/jsx-namespace';


const DoughnutChart: React.FC<TUserData> = ({ data }): EmotionJSX.Element => {
  return (
    <ChartWrapper>
      <Doughnut data={data} />
    </ChartWrapper>
  )
}

export default DoughnutChart