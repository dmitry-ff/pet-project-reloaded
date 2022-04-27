import { shallow } from "enzyme";
import App from "./App";

describe('App component', () => {

  it('should render one routes element', () => {
    const component = shallow(<App />);
    expect(component.find('Routes').length).toBe(1);
  })

  it('should render ten Route elements', () => {
    const component = shallow(<App />);
    expect(component.find('Route').length).toBe(10);
  });

  it('should render Navigation component', () => {
    const component = shallow(<App />);
    expect(component.find('Navigation').length).toBe(1);
  })
})

