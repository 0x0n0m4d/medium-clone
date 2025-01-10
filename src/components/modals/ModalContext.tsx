'use client';

import { createContext, ReactNode } from 'react';

interface IModalContext {
  modalContent: ReactNode;
  isModalOpen: Boolean;
  setModalOpen: Function;
}

const ModalContext = createContext<IModalContext>({
  modalContent: null,
  isModalOpen: false,
  setModalOpen: () => {}
});

export default ModalContext;
