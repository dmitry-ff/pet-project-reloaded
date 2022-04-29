import { dataTransform } from "./dataTransform";
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
const mockObjectValid = {
  labels: ['Apr, 10'],
  datasets: [
    {
      label: 'max t, °C',
      data: [1],
      backgroundColor: 'rgba(222, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 2,
      tension: 0.3
    },
    {
      label: 'avg t, °C',
      data: [1],
      backgroundColor: 'rgba(48, 207, 113,0.2)',
      borderColor: 'rgba(48, 207, 113,1)',
      borderWidth: 2,
      tension: 0.3
    },
    {
      label: 'min t, °C',
      data: [1],
      backgroundColor: 'rgba(1, 99, 132, 0.2)',
      borderColor: 'rgba(1, 99, 132, 1)',
      borderWidth: 2,
      tension: 0.3
    }
  ]

};
const mockObjectInvalid = {
  labels: [],
  datasets: [
    {
      label: 'max t, °C',
      data: [],
      backgroundColor: 'rgba(222, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 2,
      tension: 0.3
    },
    {
      label: 'avg t, °C',
      data: [],
      backgroundColor: 'rgba(48, 207, 113,0.2)',
      borderColor: 'rgba(48, 207, 113,1)',
      borderWidth: 2,
      tension: 0.3
    },
    {
      label: 'min t, °C',
      data: [],
      backgroundColor: 'rgba(1, 99, 132, 0.2)',
      borderColor: 'rgba(1, 99, 132, 1)',
      borderWidth: 2,
      tension: 0.3
    }
  ]
};

describe('dataTransform', () => {
  it('should return invalid object if data is empty', () => {
    expect(dataTransform(mockDataInvalid)).toEqual(mockObjectInvalid)
  })
  it('shoul render valid oject if data is valid', () => {
    expect(dataTransform(mockData)).toEqual(mockObjectValid)
  })
})