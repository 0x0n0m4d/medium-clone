import { ReactNode, useContext } from 'react';
import { ModalContext } from './ModalContext';

interface Props {
  children: ReactNode;
}

const Modal = ({ children }: Props) => {
  const { isModalOpen } = useContext(ModalContext);
  if (isModalOpen) return <div>{children}</div>;
};

export default Modal;
