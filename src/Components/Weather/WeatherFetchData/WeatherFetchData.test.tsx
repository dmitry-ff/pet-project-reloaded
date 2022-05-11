import { shallow } from "enzyme";
import WeatherFetchData from "./WeatherFetchData";
import React, { useState } from "react";
import axios from 'axios';
import mockAxios from 'jest-mock-axios';
import { fetchData } from "./utils/fetchData";
import { TResponse } from '../types/TResponse';
import { mockResponse } from "./data";


const mockProps = {
  apiURL: 'http://api.weatherapi.com/v1/forecast.json?key=3e2b23202a804627a5c115738222701&q=Tula&days=3&aqi=no&alerts=no/',
  townName: 'Tula'
}

describe('WeatherGetData component', () => {

  it('should return Box and CircularProgress', () => {
    const wrapper = shallow(<WeatherFetchData {...mockProps} />);

    expect(wrapper.find('ForwardRef(Box)')).toHaveLength(1);
    expect(wrapper.find('ForwardRef(CircularProgress)')).toHaveLength(1);
  })

  it('Good response', async () => {

    mockAxios.get.mockResolvedValueOnce(mockResponse);

    const response = await fetchData<TResponse>(mockProps.apiURL);

    expect(response.data.forecast).toEqual(mockResponse);
  })
  it('Bad response', async () => {
    // const response = await fetchData<TResponse>('asdfasdf')
    // try {
    //   await fetchData<TResponse>('asdsadgas')
    // } catch (e: any) {
    //   expect(e.message).toMatch('NetworkError')
    // }

    // expect(response.data.forecast).toBe([])

    const error = new Error('Network Error');

    mockAxios.get.mockRejectedValueOnce(error);

    try {
      const response = await fetchData('asdfsadkjflsadf');
    } catch (e) {
      expect(e).toEqual(error);
    }
  })

})


