import { shallow } from "enzyme";
import _ from "lodash";
import BarChart from "./BarChart";
import { Bar } from "react-chartjs-2";

// import { userData } from "../Data/Data";
const userData = {

  labels: ['Red', 'Blue', 'Yellow',],
  datasets: [
    {
      label: 'Dataset 1',
      data: [1, 2, 3, 45, 6, 7],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      tension: 0.4
    },
    {
      label: 'Dataset 2',
      data: _.reverse([1, 2, 3, 45, 6, 7]),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
      tension: 0.1
    },

  ]
}

describe('DoughnutChart component', () => {
  it('should render BarChart component', () => {
    const component = shallow(<BarChart data={userData} />);
    const wrapper = component.find('Styled(div)');
    expect(wrapper.length).toBe(1);
  })
  it('should render Bar chart', () => {
    const component = shallow(<Bar data={userData} />);
    const wrapper = component.find('ForwardRef(ChartComponent)');
    expect(wrapper.length).toBe(1);
  })
})