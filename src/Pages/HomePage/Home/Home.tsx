import React from 'react';
import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { CenteredHeader } from './Home.styled';
import Modal from '../components/Modal/Modal';
import dog from '../../../Images/dog.svg'



const Home: React.FC = (): EmotionJSX.Element => {
  const [isOpen, setOpen] = React.useState<boolean>(false);

  const openModal = () => {
    setOpen(true);
  }


  return (
    <>
      <CenteredHeader>
        <h2 onClick={openModal}>
          <abbr
            title="When you click this header the modal window will showen">
            Home
          </abbr>
        </h2>
      </CenteredHeader>

      {isOpen &&
        <Modal setOpen={setOpen} >
          <img
            style={{ width: '400px' }}
            src={dog} alt='dog' />
        </Modal>
      }
    </>
  )
}

export default Home;