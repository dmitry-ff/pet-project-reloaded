import { mount, shallow } from "enzyme";
import renderer from 'react-test-renderer';
import TemperatureChart from "./TemperatureChart";
import { TData } from "../types/TData";
import React from "react";
import { lineUserData } from "../../../App/data/Data";


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



describe('Testing TemperatureChart component', () => {
  it('Should return null if loading is true', () => {
    const component = shallow(<TemperatureChart loading={true} data={[]} />)
    expect(component.type()).toEqual(null)
  })
})
beforeEach(() => {
  jest.spyOn(React, 'useEffect').mockImplementation(f => f());
})
afterEach(() => {
  jest.resetAllMocks();
  jest.restoreAllMocks();
})

it('Should return null if loading is true', () => {
  jest.spyOn(React, 'useEffect').mockImplementation(f => f());

  const component = shallow(<TemperatureChart loading={false} data={data} />)
  expect(component.type()).toEqual(null)
})
