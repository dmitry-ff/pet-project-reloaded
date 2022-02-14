import ChartWrapper from "../../Style/ChartWrapper";
import { TLineData } from '../../Data/Types'
import { Line } from 'react-chartjs-2';
import { EmotionJSX } from "@emotion/react/types/jsx-namespace";

const LineChart: React.FC<TLineData> = ({ data }): EmotionJSX.Element => {
  return (
    <ChartWrapper>
      <Line data={data} />
    </ChartWrapper>)
}

export default LineChart