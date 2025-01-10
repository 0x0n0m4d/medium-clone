import { ReactNode, useContext } from 'react';
import ModalContext from './ModalContext';

interface Props {
  element: ReactNode;
  children: ReactNode;
  className?: string;
}

const OpenModalButton = ({ element, children, className }: Props) => {
  const { setModalOpen } = useContext(ModalContext);

  return (
    <button
      className={className || ''}
      onClick={() => setModalOpen(true, element)}
    >
      {children}
    </button>
  );
};

export default OpenModalButton;
