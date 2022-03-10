import { HTMLAttributes, shallow, ShallowWrapper } from "enzyme";
import App from "./App";

const setUp = () => shallow(<App />)

describe('App component', () => {
  let component: ShallowWrapper<HTMLAttributes, any, React.Component<{}, {}, any>>;

  beforeEach(() => {
    component = setUp()
  });
  it('should render one routes element', () => {
    let wrapper = component.find('Routes')
    expect(wrapper.length).toEqual(1);
  })
})
