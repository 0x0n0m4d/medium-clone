import { createContext, ReactNode } from 'react';
import { useModal } from '@/src/hooks/useModal';

interface IModalContext {
  modalContent: ReactNode;
  isModalOpen: Boolean;
  toggleModal: Function;
}

const ModalContext = createContext<IModalContext>({
  modalContent: null,
  isModalOpen: false,
  toggleModal: () => {}
});

const ModalProvider = (children: ReactNode) => {
  const { modalContent, isModalOpen, toggleModal } = useModal();

  return (
    <ModalContext.Provider value={{ modalContent, isModalOpen, toggleModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export { ModalContext, ModalProvider };
