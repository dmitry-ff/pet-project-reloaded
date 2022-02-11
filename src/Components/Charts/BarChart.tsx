import { Bar } from "react-chartjs-2";
import ChartWrapper from "../../Style/ChartWrapper";
import { TUserData } from '../../Data/Types'

import React from 'react'

function BarChart({ data }: TUserData) {
  return (
    <ChartWrapper>
      <Bar data={data} />
    </ChartWrapper>
  )
}

export default BarChart