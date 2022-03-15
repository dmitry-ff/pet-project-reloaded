import * as Styled from "../ChartWrapper.styled";
import { Pie } from 'react-chartjs-2';
import { TUserData } from "../../../Data/Types/TUserData";
import { EmotionJSX } from "@emotion/react/types/jsx-namespace";

const PieChart: React.FC<TUserData> = ({ data }): EmotionJSX.Element => {
  return (
    <Styled.ChartWrapper>
      <Pie data={data} />
    </Styled.ChartWrapper>)
}

export default PieChart;