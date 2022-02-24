import { shallow } from "enzyme";
import ReactFeatures from "../Pages/ReactFeatures";


describe('ReactFeatures component', () => {
  it('should render styled div ', () => {
    const component = shallow(<ReactFeatures />);
    const wrapper = component.find('Styled(div)');
    expect(wrapper.length).toBe(1);
  })
})