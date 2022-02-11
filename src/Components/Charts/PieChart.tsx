import ChartWrapper from "../../Style/ChartWrapper";
import { Pie } from 'react-chartjs-2';
import { TUserData } from '../../Data/Types'

function PieChart({ data }: TUserData) {
  return (
    <ChartWrapper>
      <Pie data={data} />
    </ChartWrapper>)
}

export default PieChart;