import ChartWrapper from "../ChartWrapper";
import { Pie } from 'react-chartjs-2';
import { TUserData } from "../../../Data/Types/TUserData";
import { EmotionJSX } from "@emotion/react/types/jsx-namespace";

const PieChart: React.FC<TUserData> = ({ data }): EmotionJSX.Element => {
  return (
    <ChartWrapper>
      <Pie data={data} />
    </ChartWrapper>)
}

export default PieChart;