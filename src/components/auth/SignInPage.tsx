import OpenModalButton from '../modals/OpenModalButton';
import SignUpPage from './SignUpPage';

const SignInPage = () => {
  return (
    <div className="grid place-items-center h-full">
      <h2 className="serif text-black/95 text-[28px] mb-[50px]">
        Welcome back.
      </h2>
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
          <OpenModalButton className="font-bold" element={<SignUpPage />}>
            Create one
          </OpenModalButton>
        </p>
      </div>
      <p className="text-sm text-gray-400 font-normal">
        Click "Sign In" to agree to Medium's{' '}
        <span className="underline cursor-pointer">Terms of Service</span> and
        acknowledge that Medium's{' '}
        <span className="underline cursor-pointer">Privacy Policy</span> applies
        to you.
      </p>
    </div>
  );
};

export default SignInPage;
