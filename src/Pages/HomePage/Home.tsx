import React from 'react';
import ReactDOM from 'react-dom';
import styled from '@emotion/styled';
import dog from '../../Images/dog.svg'
import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { CenteredHeader } from './Home.styled';
import Modal from './components/Modal'
const Home: React.FC = (): EmotionJSX.Element => {

  const [isOpen, setOpen] = React.useState<boolean>(false);
  const toggleModal = () => {
    setOpen(isOpen => !isOpen)
  }
  const modalRoot = document.getElementById('modal-root');
  return (
    <>
      <CenteredHeader>
        <h2 onClick={toggleModal}>Home</h2>
      </CenteredHeader>

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