import { shallow } from "enzyme";
import _ from "lodash";
import BarChart from "../Components/Charts/BarChart";
import renderer from 'react-test-renderer';

// import { userData } from "../Data/Data";
const userData = {

  labels: ['Red', 'Blue', 'Yellow',],
  datasets: [
    {
      label: 'Dataset 1',
      data: [1, 2, 3, 45, 6, 7],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      tension: 0.4
    },
    {
      label: 'Dataset 2',
      data: _.reverse([1, 2, 3, 45, 6, 7]),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
      tension: 0.1
    },

  ]
}
describe('BarChart component', () => {
  it('shoud render BarChart', () => {
    const component = shallow(<BarChart data={userData} />)
    const wrapper = component.find('Styled(div)');
    expect(wrapper.length).toBe(1);
  });
  it('Barchart snapshot', () => {
    const tree = renderer
      .create(<BarChart data={userData} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  })
})