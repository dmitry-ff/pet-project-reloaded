import { shallow } from "enzyme";
import { LineChart } from "..";
import { lineUserData } from "../../../App/data";
import { Line } from "react-chartjs-2";

describe('LineChart component', () => {
  it('should render BarChart component', () => {
    const component = shallow(<LineChart data={lineUserData} />);
    const wrapper = component.find('Styled(div)');
    expect(wrapper.length).toBe(1);
  })
  it('should render Bar chart', () => {
    const component = shallow(<Line data={lineUserData} />);
    const wrapper = component.find('ForwardRef(ChartComponent)');
    expect(wrapper.length).toBe(1);
  })
});

