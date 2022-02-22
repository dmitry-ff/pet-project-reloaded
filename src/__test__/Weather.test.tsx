import { shallow } from "enzyme";
import Weather from "../Pages/Weather";
import renderer from 'react-test-renderer';

describe('Weather component', () => {

  it('should render component with data array', () => {
    const tree = renderer
      .create(<Weather />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render one form element', () => {
    const component = shallow(<Weather />);
    const wrapper = component.find('form');
    expect(wrapper.length).toBe(1);
  });

})