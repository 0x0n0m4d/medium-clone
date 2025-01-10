import { useContext } from 'react';
import ModalContext from '../modals/ModalContext';
import SignUpPage from './SignUpPage';

const SignInPage = () => {
  const { setModalOpen } = useContext(ModalContext);

  return (
    <div>
      <ul>
        <li>
          <button>
            <i className="fa-brands fa-google"></i> sign in with google
          </button>
        </li>
        <li>
          <button>
            <i className="fa-regular fa-envelope"></i> sign in with email
          </button>
        </li>
      </ul>
      <p>
        No account?{' '}
        <button onClick={() => setModalOpen(true, <SignUpPage />)}>
          Create one
        </button>
      </p>
    </div>
  );
};

export default SignInPage;
