
import { HTMLAttributes, mount, render, shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import Charts from '../Pages/Charts';
import { NavLink } from 'react-router-dom';

const setUp = () => shallow(<Charts />)
describe('Charts component', () => {

  let component: ShallowWrapper<HTMLAttributes, any, React.Component<{}, {}, any>>;

  it('should contain ChartsNav element', () => {
    component = setUp()
    const wrapper = component.find('Styled(div)');
    expect(wrapper.length).toBe(1);
  });
})
