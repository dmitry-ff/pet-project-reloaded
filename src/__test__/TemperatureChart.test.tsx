import { render, shallow } from "enzyme"
import { TData } from "../Data/Types"
import TemperatureChart from '../Components/Weather/TemperatureChart'

type TProps = {
  loading: boolean,
  data: TData[]
};


const props = {
  loading: true,
  data: [
    {
      date: '2022-02-21',
      day: {
        maxtemp_c: 11,
        mintemp_c: 11,
        avgtemp_c: 11,
        maxwind_kph: 11,
        daily_chance_of_rain: 11,
        daily_chance_of_snow: 11,
        condition: {
          text: 'asdasdasd',
          icon: 'asdasdasd',
        }
      }
    }
  ]
};
//const setUp = (props: TProps) => render(<TemperatureChart {...props} />)

it('should render component', () => {

  // const view = setUp(props);
  const view = render(<TemperatureChart {...props} />)

})

export { }