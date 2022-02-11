import { Doughnut } from 'react-chartjs-2';
import ChartWrapper from "../../Style/ChartWrapper";
import { TUserData } from '../../Data/Types'


function DoughnutChart({ data }: TUserData) {
  return (
    <ChartWrapper>
      <Doughnut data={data} />
    </ChartWrapper>
  )
}

export default DoughnutChart