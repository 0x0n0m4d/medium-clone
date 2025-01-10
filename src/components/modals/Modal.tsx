import { useContext } from 'react';
import ModalContext from './ModalContext';

const Modal = () => {
  const { isModalOpen, modalContent } = useContext(ModalContext);
  return isModalOpen ? (
    <div className="fixed left-0 right-0 top-0 bottom-0 bg-white/95 z-[1]">
      {modalContent}
    </div>
  ) : null;
};

export default Modal;
