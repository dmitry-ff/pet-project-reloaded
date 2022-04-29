import { shallow } from "enzyme";
import PieChart from "./PieChart";
import { userData } from "../../../App/data";
import { Pie } from "react-chartjs-2/";

describe('PieChart component', () => {

  it('should render BarChart component', () => {
    const component = shallow(<PieChart data={userData} />);
    const wrapper = component.find('Styled(div)');
    expect(wrapper.length).toBe(1);
  })
  it('should render Bar chart', () => {
    const component = shallow(<Pie data={userData} />);
    const wrapper = component.find('ForwardRef(ChartComponent)');
    expect(wrapper.length).toBe(1);
  })
})
