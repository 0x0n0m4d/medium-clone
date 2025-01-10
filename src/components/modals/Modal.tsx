import { useContext } from 'react';
import ModalContext from './ModalContext';

const Modal = () => {
  const { isModalOpen, modalContent, setModalOpen } = useContext(ModalContext);
  return isModalOpen ? (
    <div className="fixed left-0 right-0 top-0 bottom-0 bg-white/95 z-[1] flex justify-center align-center overflow-x-hidden overflow-y-auto">
      <div className="relative rounded bg-white px-11 py-14 shadow-black/15 shadow-[0px_2px_10px]">
        <button
          className="absolute top-3 right-3 text-gray-400/60 text-2xl"
          onClick={() => setModalOpen(false)}
        >
          <i className="fa-solid fa-xmark" />
        </button>
        {modalContent}
      </div>
    </div>
  ) : null;
};

export default Modal;
