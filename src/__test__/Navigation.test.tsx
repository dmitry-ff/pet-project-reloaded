import { HTMLAttributes, shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import Navigation from '../Components/Navigation/Navigation';

const setUp = () => shallow(<Navigation />)

describe('shoud render Navigation component', () => {

  let component: ShallowWrapper<HTMLAttributes, any, React.Component<{}, {}, any>>;

  beforeEach(() => {
    component = setUp()
  });

  it('shoud contain two styled div elements', () => {
    const wrapper = component.find('Styled(div)');
    expect(wrapper.length).toBe(2);
  });
  it('shoud contein Navbar element', () => {
    const wrapper = component.find('Styled(nav)');
    expect(wrapper.length).toBe(1);
  })
  it('shoud contain h2 elements', () => {
    const wrapper = component.find('h2');
    expect(wrapper.length).toBe(2);
  })

  it('shoud contain Link element', () => {
    const wrapper = component.find('Link');
    expect(wrapper.length).toBe(4);
  })
  it('shoud contain image element', () => {
    const wrapper = component.find('img');
    expect(wrapper.length).toBe(1);
  })

})
export { }

