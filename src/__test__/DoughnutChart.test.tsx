import { shallow } from "enzyme";
import DoughnutChart from "../Components/Charts/DoughnutChart";
import { userData } from "../Data/Data";

describe('DoughnutChart component', () => {
  it('shoud render DoughnutChart', () => {
    const componnet = shallow(<DoughnutChart data={userData} />)
    const wrapper = componnet.find('Styled(div)');
    expect(wrapper.length).toBe(1);
  })
})