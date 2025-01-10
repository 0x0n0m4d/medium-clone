import { useContext } from 'react';
import ModalContext from './ModalContext';

const Modal = () => {
  const { isModalOpen, modalContent } = useContext(ModalContext);
  return isModalOpen ? (
    <div className="fixed left-0 right-0 top-0 bottom-0 bg-white/95 z-[1] flex justify-center align-center overflow-x-hidden overflow-y-auto">
      {modalContent}
    </div>
  ) : null;
};

export default Modal;
