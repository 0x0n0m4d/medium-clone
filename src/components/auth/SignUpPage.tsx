import OpenModalButton from '../modals/OpenModalButton';
import SignInPage from './SignInPage';

const SignUpPage = () => {
  return (
    <div>
      <ul>
        <li>
          <button>
            <i className="fa-brands fa-google"></i> sign up with google
          </button>
        </li>
        <li>
          <button>
            <i className="fa-regular fa-envelope"></i> sign up with email
          </button>
        </li>
      </ul>
      <p>
        Already have an account?{' '}
        <OpenModalButton element={<SignInPage />}>Sign In</OpenModalButton>
      </p>
    </div>
  );
};

export default SignUpPage;
