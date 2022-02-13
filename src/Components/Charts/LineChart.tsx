import ChartWrapper from "../../Style/ChartWrapper";
import { TLineData } from '../../Data/Types'
import { Line } from 'react-chartjs-2';

function LineChart({ data }: TLineData) {
  return (
    <ChartWrapper>
      <Line data={data} />
    </ChartWrapper>)
}

export default LineChart