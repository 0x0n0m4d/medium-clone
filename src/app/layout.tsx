'use client';

import '@fortawesome/fontawesome-free/css/all.min.css';
import './globals.css';
import { Provider } from 'react-redux';
import Modal from '@/components/modals/Modal';
import AuthContext from '@/contexts/AuthContext';
import ModalContext from '@/contexts/ModalContext';
import { useAuth } from '@/hooks/useAuth';
import { useModal } from '@/hooks/useModal';
import store from '@/redux/store';

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { modalContent, isModalOpen, setModalOpen, isDialog, setIsDialog } =
    useModal();
  const { user, setUser } = useAuth();
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <AuthContext.Provider value={{ user, setUser }}>
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
          </AuthContext.Provider>
        </Provider>
      </body>
    </html>
  );
}
