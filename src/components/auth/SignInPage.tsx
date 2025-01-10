import OpenModalButton from '../modals/OpenModalButton';
import SignUpPage from './SignUpPage';

const SignInPage = () => {
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
        <OpenModalButton element={<SignUpPage />}>Create one</OpenModalButton>
      </p>
    </div>
  );
};

export default SignInPage;
