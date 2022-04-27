import { shallow } from "enzyme";
import ReactFeatures from "./Features";
import { createUser } from '../utils/createUser'

describe('ReactFeatures component', () => {
  it('should return button', () => {
    const component = shallow(<ReactFeatures />);
    expect(component.find('button').length).toBe(1);
  })
  it('should increase value of button by 1', () => {
    const component = shallow(<ReactFeatures />);
    const wrapper = component.find('ForwardRef(Button)');
    wrapper.simulate('click')
    console.log(component.debug());
    expect(wrapper).toHaveTextContent('1')
  })
})

describe('test for utils', () => {
  it('should return user valid user object', () => {
    console.log(createUser('Dmitry', 'Kozlov'))
    expect(createUser('Dmitry', 'Kozlov')).toEqual({ name: 'Dmitry', surname: 'Kozlov' });
  })
})