import { mount, shallow } from 'enzyme';
import React from 'react';
import CanvasChart from './VanillasCanvasChart';
import 'jest-canvas-mock'
import { TData } from '../types/TData';

const mockData: TData[] = [
  {
    date: '12-12-2001',
    day: {
      maxtemp_c: 10,
      mintemp_c: 10,
      avgtemp_c: 10,
      maxwind_kph: 10,
      daily_chance_of_rain: 10,
      daily_chance_of_snow: 10,
      condition: {
        text: 'icon.png',
        icon: 'icon.png',
      }
    }
  }
]


describe('CanvasChart component', () => {
  const setUp = (loading: boolean, mockData: TData[]) => shallow(<CanvasChart loading={loading} data={mockData} />)

  it('should render two Styled(div) elements', () => {
    const component = setUp(false, mockData)
    const wrapper = component.find('Styled(div)');
    expect(wrapper.length).toBe(2);
  })
  it('should render one Styled(canvas) element', () => {
    const component = setUp(false, mockData)
    const wrapper = component.find('Styled(canvas)');
    expect(wrapper.length).toBe(1);
  })
  it('useRef testing', () => {
    const useRefSpy = jest.spyOn(React, 'useRef').mockReturnValueOnce({ current: document.createElement('canvas') });
    const mock = jest.fn();
    const component = shallow(<CanvasChart loading={false} data={mockData} />)
  })
})


