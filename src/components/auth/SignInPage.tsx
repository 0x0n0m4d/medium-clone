import OpenModalButton from '../modals/OpenModalButton';
import SignUpPage from './SignUpPage';

const SignInPage = () => {
  return (
    <div>
      <h2 className="serif text-black/95 text-[28px] mb-[50px]">
        Welcome back.
      </h2>
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
        <OpenModalButton className="font-bold" element={<SignUpPage />}>
          Create one
        </OpenModalButton>
      </p>
    </div>
  );
};

export default SignInPage;
