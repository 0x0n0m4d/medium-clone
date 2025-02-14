import { ReactNode } from 'react';
import AuthContext from '@/contexts/AuthContext';
import ModalContext from '@/contexts/ModalContext';
import useAuth from '@/hooks/useAuth';
import { useModal } from '@/hooks/useModal';
import Modal from './modals/Modal';

interface AppProps {
  children: ReactNode;
}

const App = ({ children }: AppProps) => {
  const { modalContent, isModalOpen, setModalOpen, isDialog, setIsDialog } =
    useModal();

  const { user, isLoading, error } = useAuth();

  return (
    <html lang="en">
      <body>
        <AuthContext.Provider value={{ user, isLoading, error }}>
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
      </body>
    </html>
  );
};

export default App;
