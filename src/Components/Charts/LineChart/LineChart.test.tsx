import { shallow } from "enzyme";
import LineChart from "./LineChart";
import { lineUserData } from "../../../Data/Data";

describe('LineChart component', () => {
  it('shoud render LineChart', () => {
    const componnet = shallow(<LineChart data={lineUserData} />)
    const wrapper = componnet.find('Styled(div)');
    expect(wrapper.length).toBe(1);
  });
});
