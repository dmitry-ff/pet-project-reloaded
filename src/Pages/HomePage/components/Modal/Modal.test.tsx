import { shallow } from "enzyme";
import Modal from "./Modal";
import dog from '../../../../Images/dog.svg'
import renderer from 'react-test-renderer';
import { ReactPortal, useState } from "react";
import ReactDOM from "react-dom";

describe('Modal component', () => {


  it('should render modal window', () => {
    const setOpen = jest.fn()
    const component = shallow(<Modal setOpen={setOpen}>
      <img
        style={{ width: '400px' }}
        src={dog} alt='dog' />
    </Modal>)
    console.log(component.debug())
  })
})