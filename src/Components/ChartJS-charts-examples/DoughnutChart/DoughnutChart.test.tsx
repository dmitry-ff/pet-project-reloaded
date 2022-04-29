import { shallow } from "enzyme";
import DoughnutChart from "./DoughnutChart";
import { userData } from "../../../App/data";
import { Doughnut } from "react-chartjs-2";

describe('DoughnutChart component', () => {
  it('should render DoughnutChart component', () => {
    const component = shallow(<DoughnutChart data={userData} />);
    const wrapper = component.find('Styled(div)');
    expect(wrapper.length).toBe(1);
  })
  it('should render Doughnut chart', () => {
    const component = shallow(<Doughnut data={userData} />);
    const wrapper = component.find('ForwardRef(ChartComponent)');
    expect(wrapper.length).toBe(1);
  })
})
