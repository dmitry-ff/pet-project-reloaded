import React from 'react';
import ReactDOM from 'react-dom';
import styled from '@emotion/styled';
import dog from '../../Images/dog.svg'
import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import * as Styled from './Home.styled';

interface IProps {
  children: JSX.Element[] | JSX.Element
};

const Modal: React.FC<IProps> = ({ children }) => {
  return (
    <Styled.Portal>
      {children}
    </Styled.Portal>
  )
}

const Home: React.FC = (): EmotionJSX.Element => {

  const [isOpen, setOpen] = React.useState<boolean>(false);
  const toggleModal = () => {
    setOpen(isOpen => !isOpen)
  }
  const modalRoot = document.getElementById('modal-root');
  return (
    <>
      <Styled.CenteredHeader>
        <h2 onClick={toggleModal}>Home</h2>
      </Styled.CenteredHeader>

      {isOpen &&
        modalRoot ?
        ReactDOM.createPortal(
          <Modal>
            <img style={{ width: '400px' }} src={dog} alt='dog' onClick={toggleModal} />
          </Modal>,
          modalRoot)
        : null
      }
    </>
  )
}

export default Home;