import { shallow } from "enzyme";
import renderer from 'react-test-renderer';
import WeatherBlock from '../Components/Weather/WeatherBlock'
import WeatherGetData from "../Components/Weather/WeatherGetData";
const mockProps = {
  apiURL: 'http://api.weatherapi.com/v1/forecast.json?key=3e2b23202a804627a5c115738222701&q=Tula&days=3&aqi=no&alerts=no',
  townName: 'Tula'
}
type TProps = {
  apiURL: string,
  townName: string
}
const setUp = (props: TProps) => shallow(<WeatherGetData {...props} />)
describe('WeatherGetData component', () => {
  let component;
  beforeEach(() => {
    component = setUp(mockProps);

  })
  it('WeatherGetData snapshot', () => {
    const tree = renderer
      .create(<WeatherGetData {...mockProps} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  })
  it('should render Weather component', () => {
    component = setUp(mockProps);
    const wrapper = component.find('Weather');
    expect(wrapper.length).toBe(1);
  })
  it('should render TemperatureChart component', () => {
    component = setUp(mockProps);
    const wrapper = component.find('TemperatureChart');
    expect(wrapper.length).toBe(1);
  })
})