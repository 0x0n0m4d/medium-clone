import OpenModalButton from '../modals/OpenModalButton';
import SignInPage from './SignInPage';

const SignUpPage = () => {
  return (
    <div className="grid place-items-center h-full">
      <h2 className="serif text-black/95 text-[28px] mb-[50px]">
        Join Medium.
      </h2>
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
          <OpenModalButton className="font-bold" element={<SignInPage />}>
            Sign In
          </OpenModalButton>
        </p>
      </div>
      <p className="text-sm text-gray-400 font-normal">
        Click "Sign Up" to agree to Medium's{' '}
        <span className="underline cursor-pointer">Terms of Service</span> and
        acknowledge that Medium's{' '}
        <span className="underline cursor-pointer">Privacy Policy</span> applies
        to you.
      </p>
    </div>
  );
};

export default SignUpPage;
