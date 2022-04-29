import * as Styled from "../ChartWrapper.styled";
import { TLineData } from "../types";
import { Line } from 'react-chartjs-2';
import { EmotionJSX } from "@emotion/react/types/jsx-namespace";

const LineChart: React.FC<TLineData> = ({ data }): EmotionJSX.Element => {
  return (
    <Styled.ChartWrapper>
      <Line data={data} />
    </Styled.ChartWrapper>)
}

export default LineChart