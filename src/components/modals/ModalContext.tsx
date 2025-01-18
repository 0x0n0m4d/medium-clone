'use client';

import { createContext, ReactNode } from 'react';

interface IModalContext {
  modalContent: ReactNode;
  isModalOpen: Boolean;
  setModalOpen: Function;
  isDialog: Boolean;
  setIsDialog: Function;
}

const ModalContext = createContext<IModalContext>({
  modalContent: null,
  isModalOpen: false,
  setModalOpen: () => {},
  isDialog: true,
  setIsDialog: () => {}
});

export default ModalContext;
