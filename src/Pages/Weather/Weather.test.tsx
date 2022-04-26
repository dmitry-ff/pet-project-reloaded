import { shallow } from "enzyme";
import Weather from "./Weather";
import renderer from 'react-test-renderer';

describe('Weather component', () => {

  it('should render one form element', () => {
    const component = shallow(<Weather />);
    const wrapper = component.find('form');
    expect(wrapper.length).toBe(1);
  });

})
export { }