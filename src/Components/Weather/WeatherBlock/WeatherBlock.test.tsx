import WeatherBlock from './WeatherBlock';
import renderer from 'react-test-renderer';
import { TData } from '../types/TData';
import { shallow } from 'enzyme';
const maxtempGzero = [
  {
    date: '2020-21-10',
    day: {
      maxtemp_c: 1,
      mintemp_c: 1,
      avgtemp_c: 1,
      maxwind_kph: 1,
      daily_chance_of_rain: 1,
      daily_chance_of_snow: 1,
      condition: {
        text: 'sunny',
        icon: 'icon.png',
      }
    }
  }
] as TData[];
const maxtempLzero = [
  {
    date: '2020-21-10',
    day: {
      maxtemp_c: -1,
      mintemp_c: -1,
      avgtemp_c: -1,
      maxwind_kph: 1,
      daily_chance_of_rain: 1,
      daily_chance_of_snow: 1,
      condition: {
        text: 'sunny',
        icon: 'icon.png',
      }
    }
  },
  {
    date: '2020-21-10',
    day: {
      maxtemp_c: -1,
      mintemp_c: -1,
      avgtemp_c: -1,
      maxwind_kph: 1,
      daily_chance_of_rain: 1,
      daily_chance_of_snow: 1,
      condition: {
        text: 'sunny',
        icon: 'icon.png',
      }
    }
  }
] as TData[];

describe('WeatherBlock component', () => {

  it('should render component with data array', () => {
    const tree = renderer
      .create(<WeatherBlock loading={true} nameHead={'Tula'} data={[]} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should render null if loading is false and data is empty', () => {
    const component = shallow(<WeatherBlock loading={false} nameHead={'Tula'} data={[]} />)
    expect(component).toBeNull();
  })
  it('should render layout if loading is false and data isn`t empty', () => {
    const component = shallow(<WeatherBlock loading={false} nameHead={'Tula'} data={maxtempGzero} />)
    const wrapper = component.find('div')
    expect(wrapper).not.toBeNull();
  })
  it('should render layout with another branch', () => {
    const component = shallow(<WeatherBlock loading={false} nameHead={'Tula'} data={maxtempLzero} />)
    const wrapper = component.find('div')
    expect(wrapper).not.toBeNull();
  })
})
