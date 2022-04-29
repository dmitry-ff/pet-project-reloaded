import { shallow } from "enzyme";
import WeatherGetData from "../WeatherFetchData";
import React, { useState } from "react";
import axios from 'axios';
import mockAxios from 'jest-mock-axios'

type TProps = {
  apiURL: string,
  townName: string
}

const mockProps = {
  apiURL: 'http://api.weatherapi.com/v1/forecast.json?key=3e2b23202a804627a5c115738222701&q=Tula&days=3&aqi=no&alerts=no',
  townName: 'Tula'
}

describe('WeatherGetData component', () => {

  describe('rendering different branches', () => {

    // it('should return Box and CircularProgress', () => {
    //   const wrapper = shallow(<WeatherGetData {...mockProps} />);
    //   console.log(wrapper.debug())
    //   expect(wrapper.find('ForwardRef(Box)')).toHaveLength(1);
    //   expect(wrapper.find('ForwardRef(CircularProgress)')).toHaveLength(1);
    // })

    // it('should return error message', () => {
    //   const setLoadingMock = jest.fn();
    //   const useStateMock: any = (isLoading: boolean) => [true, setLoadingMock];
    //   jest.spyOn(React, 'useState').mockImplementation(useStateMock);

    //   const wrapper = shallow(<WeatherGetData {...mockProps} />);

    // })

  })
})
beforeEach(() => {
  jest.spyOn(React, 'useEffect').mockImplementation(f => f());
})
describe('API call testing', () => {
  it('should fetch fata about weather', async () => {
    const wrapper = shallow(<WeatherGetData {...mockProps} />);
  })
})

