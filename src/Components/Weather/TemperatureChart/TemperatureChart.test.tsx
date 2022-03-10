import { mount, shallow } from "enzyme";
import renderer from 'react-test-renderer';
import TemperatureChart from "./TemperatureChart";
import { TData } from "../../../Data/Types/TData";

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

describe('Temperature chart component', () => {
  it('should render canvas element with empty data array', () => {
    const tree = renderer
      .create(<TemperatureChart loading={false} data={[]} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should render canvas element with data array', () => {
    const tree = renderer
      .create(<TemperatureChart loading={false} data={data} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  })
})
