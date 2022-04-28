import React, { Dispatch, SetStateAction, useRef } from 'react';
import ReactDOM from 'react-dom';
import { Portal } from '../Modal/Modal.styled';

interface IProps {
  setOpen: Dispatch<SetStateAction<boolean>>
};

const Modal: React.FC<IProps> = ({ setOpen, children }) => {

  const modalRef = useRef<HTMLDivElement | null>(null);

  const closeModal = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === modalRef.current) {
      setOpen(false);
    }
  }



  return (
    ReactDOM.createPortal(
      <Portal
        ref={modalRef}
        onClick={closeModal}
      >
        {children}
      </Portal>,
      document.getElementById('modal-root') as HTMLElement
    )
  )
}

export default Modal;