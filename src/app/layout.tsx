'use client';

import Header from '../components/header/Header';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './globals.css';
import Modal from '../components/modals/Modal';
import ModalContext from '../components/modals/ModalContext';
import { useModal } from '../hooks/useModal';

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { modalContent, isModalOpen, setModalOpen } = useModal();
  return (
    <html lang="en">
      <body>
        <ModalContext.Provider
          value={{ modalContent, isModalOpen, setModalOpen }}
        >
          <Modal />
          <Header />
          {children}
        </ModalContext.Provider>
      </body>
    </html>
  );
}
