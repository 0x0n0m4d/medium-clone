import { useContext } from 'react';
import ModalContext from './ModalContext';

const Modal = () => {
  const { isModalOpen, modalContent, setModalOpen } = useContext(ModalContext);
  return isModalOpen ? (
    <div
      id="modal"
      data-testid="modal"
      className="modal-animation fixed left-0 right-0 top-0 bottom-0 bg-white/95 z-[1] flex justify-center items-center overflow-x-hidden overflow-y-auto"
      onClick={e => {
        const { id } = e.target as HTMLInputElement;
        if (id === 'modal') setModalOpen(false);
      }}
    >
      <div className="modal-content-animation relative rounded bg-white px-11 py-14 shadow-black/15 shadow-[0px_2px_10px] text-center flex flex-col w-[600px] lg:w-[678px] h-[695px] my-auto overflow-auto">
        <button
          className="thin-icon absolute top-2 right-3 text-gray-500 hover:text-black transition text-2xl"
          onClick={() => setModalOpen(false)}
          aria-label="close"
        >
          <i className="fa-solid fa-xmark" />
        </button>
        {modalContent}
      </div>
    </div>
  ) : null;
};

export default Modal;
