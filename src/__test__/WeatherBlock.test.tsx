import WeatherBlock from '../Components/Weather/WeatherBlock';
import renderer from 'react-test-renderer';
import { TData } from '../Data/Types/TData';
import { shallow } from 'enzyme';
import { FirstColumn } from '../Style/WeatherStyle';
import _ from 'lodash';
const mockData = [
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

describe('WeatherBlock component', () => {

  it('should render component with data array', () => {
    const tree = renderer
      .create(<WeatherBlock loading={false} nameHead={'Tula'} data={mockData} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should render component', () => {
    const component = shallow(<WeatherBlock loading={false} nameHead={'Tula'} data={mockData} />)
    const wrapper = component.find('Styled(div)');
    expect(wrapper.length).toBe(7);
  })
})
