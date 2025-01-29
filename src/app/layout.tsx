'use client';

import '@fortawesome/fontawesome-free/css/all.min.css';
import './globals.css';
import { Provider } from 'react-redux';
import Modal from '@/components/modals/Modal';
import ModalContext from '@/components/modals/ModalContext';
import { useModal } from '@/hooks/useModal';
import store from '@/redux/store';

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { modalContent, isModalOpen, setModalOpen, isDialog, setIsDialog } =
    useModal();
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <ModalContext.Provider
            value={{
              modalContent,
              isModalOpen,
              setModalOpen,
              isDialog,
              setIsDialog
            }}
          >
            <Modal />
            {children}
          </ModalContext.Provider>
        </Provider>
      </body>
    </html>
  );
}
