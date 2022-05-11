import { shallow } from 'enzyme';
import React from 'react';
import { Forward } from './Forward';

describe('Forward component', () => {
  it('Should return div element', () => {
    const componet = shallow(<Forward />);
    expect(componet.find('div').length).toBe(1);
  })
})