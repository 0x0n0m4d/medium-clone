import { ReactNode } from 'react';
import { useCookies } from 'react-cookie';
import { useDispatch } from 'react-redux';
import AuthContext from '@/contexts/AuthContext';
import ModalContext from '@/contexts/ModalContext';
import useAuth from '@/hooks/useAuth';
import { useModal } from '@/hooks/useModal';
import { AppDispatch } from '@/redux/store';
import Modal from './modals/Modal';

interface AppProps {
  children: ReactNode;
}

const App = ({ children }: AppProps) => {
  const { modalContent, isModalOpen, setModalOpen, isDialog, setIsDialog } =
    useModal();

  const dispatch = useDispatch<AppDispatch>();
  const [cookies] = useCookies(['access_token']);
  const { user, isLoading, error } = useAuth({
    dispatch,
    jwt: cookies.access_token
  });

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
