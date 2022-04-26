import { shallow } from 'enzyme';
import "jest-location-mock";
import Charts from './Charts';


describe('Charts component', () => {

  it('should contain one Styled(div) element', () => {
    const component = shallow(<Charts />)
    const wrapper = component.find('Styled(div)');
    expect(wrapper.length).toBe(1);
  });
  it('should contain four NavLink elements', () => {
    const component = shallow(<Charts />)
    const wrapper = component.find('NavLink');
    expect(wrapper.length).toBe(4);
  });
})

describe('Changing of pathname', () => {
  it('should not be equal to pathname `/`', () => {
    window.location.assign("/relative-url");
    expect(window.location).not.toEqual("/");
  })
  it('should be equal to pathname `/new-url`', () => {
    window.location.assign("/new-url");
    expect(global.window.location.href).toContain('/new-url')
  })

})

