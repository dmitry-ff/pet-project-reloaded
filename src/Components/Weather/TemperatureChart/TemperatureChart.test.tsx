import { mount, shallow } from "enzyme";
import TemperatureChart from "./TemperatureChart";
import React, { useEffect } from "react";
import 'jest-canvas-mock'

const data = [
  {
    date: '2021-01-01',
    day: {
      maxtemp_c: 1,
      mintemp_c: 1,
      avgtemp_c: 1,
      maxwind_kph: 1,
      daily_chance_of_rain: 1,
      daily_chance_of_snow: 1,
      condition: {
        text: '',
        icon: '',
      },
    },
  }
]

jest.mock('react-chartjs-2', () => ({
  Line: () => null,
}))

describe('TemperatureChart component', () => {


  it('should return null if loading is true', () => {
    const component = shallow(<TemperatureChart loading={true} data={data} />)
    expect(component).toEqual({});
  })
  it('should return Line if loading is false', () => {
    const wrapper = shallow(<TemperatureChart loading={false} data={data} />);
    console.log(wrapper.debug())
    expect(wrapper.find('Line').length).toBe(1);
  })
})