import React from 'react';
import { Portal } from './Modal.styled';

interface IProps {
  children: JSX.Element[] | JSX.Element
};
const Modal: React.FC<IProps> = ({ children }) => {
  return (
    <Portal>
      {children}
    </Portal>
  )
}

export default Modal;