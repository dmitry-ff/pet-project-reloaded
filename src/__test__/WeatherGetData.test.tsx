import { render, shallow } from "enzyme";
import React from "react";
import WeatherData from "../Components/Weather/WeatherGetData";
type TProps = {
  apiURL: string,
  townName: string
}
const props = {
  apiURL: 'http://api.weatherapi.com/v1/forecast.json?key=3e2b23202a804627a5c115738222701&q=Tula&days=3&aqi=no&alerts=no',
  townName: 'Tula'
}

// it('should render component WeatherData', () => {
//   const component = shallow(<WeatherData {...props} />);
//   expect(component.length).toBe(1)
// })

