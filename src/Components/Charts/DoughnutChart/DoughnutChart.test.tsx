import { shallow } from "enzyme";
import DoughnutChart from "./DoughnutChart";
import { userData } from "../../../App/data/Data";

describe('DoughnutChart component', () => {
  it('shoud render DoughnutChart', () => {
    const componnet = shallow(<DoughnutChart data={userData} />)
    const wrapper = componnet.find('Styled(div)');
    expect(wrapper.length).toBe(1);
  })
})
