import { useContext } from 'react';
import EmailForm from '../forms/EmailForm';
import ModalContext from '../modals/ModalContext';
import SignInPage from './SignInPage';

const SignInWithEmail = () => {
  const { setModalOpen } = useContext(ModalContext);
  return (
    <div className="grid items-center justify-center h-full">
      <div className="flex flex-col justify-center gap-7 mt-20">
        <h2 className="serif text-xl text-black/95">Sign in with email</h2>
        <p className="text-md max-w-[316px]">
          Enter the email address associated with your account, and we’ll send a
          magic link to your inbox.
        </p>
      </div>
      <div className="mb-28">
        <EmailForm
          onSubmit={() => {}}
          id="sign-in-email"
          onClick={() => setModalOpen(true, <SignInPage />)}
        />
      </div>
    </div>
  );
};

export default SignInWithEmail;
