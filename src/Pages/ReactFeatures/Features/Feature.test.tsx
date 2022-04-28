import { shallow } from "enzyme";
import ReactFeatures from "./Features";
import { createUser } from '../utils/createUser'

describe('ReactFeatures component', () => {
  it('should return button', () => {
    const component = shallow(<ReactFeatures />);
    expect(component.find('ForwardRef(Button)').length).toBe(1);
  })
  it('should increase value of button by 1', () => {
    const component = shallow(<ReactFeatures />);
    let wrapper = component.find('ForwardRef(Button)');
    wrapper.simulate('click');
    wrapper = component.find('ForwardRef(Button)');
    expect(wrapper.text()).toBe('1')
  })
})


//Тесты функции из папки utils находятся здесь, 
// по причине неработоспособности этих тестов в файле рядом с функцией
describe('test for utils', () => {
  it('should return user valid user object', () => {
    expect(createUser('Dmitry', 'Kozlov')).toEqual({ name: 'Dmitry', surname: 'Kozlov' });
  })
  it('shouldn`t return user invalid user object', () => {
    expect(createUser('Dmitry', 'Kozlov')).not.toBe({ name: '123', surname: 'lkasjflkajsdf' });
  })
})