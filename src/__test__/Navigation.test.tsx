import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import Navigation from '../Components/Navigation';
it('renders without crashing', () => {
  shallow(<Navigation />)
})

export { }