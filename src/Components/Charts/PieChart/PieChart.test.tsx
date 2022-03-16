import { shallow } from "enzyme";
import PieChart from "./PieChart";
import { userData } from "../../../App/data/Data";

describe('PieChart component', () => {
  it('shoud render PieChart', () => {
    const componnet = shallow(<PieChart data={userData} />)
    const wrapper = componnet.find('Styled(div)');
    expect(wrapper.length).toBe(1);
  })
})
