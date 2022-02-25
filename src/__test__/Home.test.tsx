import { shallow } from "enzyme";
import Home from "../Pages/Home";

describe('Home component', () => {
  it('should render CenteredHeader component', () => {
    const component = shallow(<Home />);
    const wrapper = component.find('Styled(div)');
    expect(wrapper.length).toBe(1);
  })
})
export { }