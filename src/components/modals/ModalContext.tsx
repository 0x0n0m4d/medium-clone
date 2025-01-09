import { createContext, ReactNode } from 'react';
import { useModal } from '@/src/hooks/useModal';

interface Props {
  children: ReactNode;
}

const ModalContext = createContext({});

const ModalProvider = ({ children }: Props) => {
  const { isModalOpen, toggleModal, modalContent } = useModal();

  return (
    <ModalContext.Provider value={{ isModalOpen, toggleModal, modalContent }}>
      {children}
    </ModalContext.Provider>
  );
};

export { ModalContext, ModalProvider };
