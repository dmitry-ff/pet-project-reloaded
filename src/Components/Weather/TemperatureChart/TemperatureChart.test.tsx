import { mount, shallow } from "enzyme";
import renderer from 'react-test-renderer';
import TemperatureChart from "./TemperatureChart";
import { TData } from "../types/TData";
import React from "react";
import { lineUserData } from "../../../App/data/Data";
lineUserData

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
const props = {
  isLoading: false,
  data
}

describe('Temperaturt chart', () => {
  it('should return Box and CircularProgress', () => {
    const wrapper = shallow(<TemperatureChart loading={false} data={data} />);
    expect(wrapper.length).toBe(1)
    console.log(wrapper.debug())
  })
  it('should return Box and CircularProgress', () => {
    const wrapper = shallow(<TemperatureChart loading={true} data={data} />);
    console.log(wrapper.debug())
  })
})
