import { shallow } from "enzyme";
import { useState } from "react";
import Home from "./Home";
import renderer from 'react-test-renderer';

describe('Home component', () => {
  it('should render CenteredHeader component', () => {
    const component = shallow(<Home />);
    const wrapper = component.find('Styled(div)');
    expect(wrapper.length).toBe(1);
  })
  it('shouldn`t render Modal without clicking', () => {
    const component = shallow(<Home />);
    expect(component.find('img').length).toBe(0)

  })
  it('should render Modal when clicking', () => {
    const component = shallow(<Home />);
    const header = component.find('h2');
    header.simulate('click');
    expect(component.find('img').length).toBe(1)
  })
})
export { }