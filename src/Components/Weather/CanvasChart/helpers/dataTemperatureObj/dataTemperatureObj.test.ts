import { dataTemperatureObj } from "..";

const mockDataInvalid = [];

const mockData = [
  {
    date: '04-10-2022',
    day: {
      maxtemp_c: 1,
      mintemp_c: 1,
      avgtemp_c: 1,
      maxwind_kph: 1,
      daily_chance_of_rain: 1,
      daily_chance_of_snow: 1,
      condition: {
        text: 'icon.png',
        icon: 'icon.png'
      }
    }
  }
];
const validObj = {
  minT: [1],
  maxT: [1],
  avgT: [1],
}

const invalidObj = {
  minT: [],
  maxT: [],
  avgT: [],
}

describe('dataTemperature testing', () => {
  it('should return valid object if data is valid', () => {
    expect(dataTemperatureObj(mockDataInvalid)).toEqual(invalidObj)
  })
  it('should return valid object if data isn`t valid', () => {
    expect(dataTemperatureObj(mockData)).toEqual(validObj)

  })
})