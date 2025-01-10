'use client';

import { createContext, ReactNode } from 'react';

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

export default ModalContext;
