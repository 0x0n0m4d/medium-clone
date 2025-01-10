import OpenModalButton from '../modals/OpenModalButton';
import AuthenticationButton from './AuthenticationButton';
import SignUpPage from './SignUpPage';

const SignInPage = () => {
  return (
    <div className="grid place-items-center h-full">
      <h2 className="serif text-black/95 text-[28px]">Welcome back.</h2>
      <div>
        <ul className="grid gap-4 place-items-center mb-14">
          <li>
            <AuthenticationButton
              icon={<i className="fa-brands fa-google" />}
              text="Sign in with google"
              onClick={() => {}}
            />
          </li>
          <li>
            <AuthenticationButton
              icon={<i className="fa-regular fa-envelope" />}
              text="Sign in with email"
              onClick={() => {}}
            />
          </li>
        </ul>
        <p className="text-lg">
          No account?{' '}
          <OpenModalButton
            className="font-extrabold text-[var(--homepage-main-color)] hover:text-yellow-600"
            element={<SignUpPage />}
          >
            Create one
          </OpenModalButton>
        </p>
      </div>
      <div className="mx-20">
        <p className="text-normal font-light text-black/60 mb-14">
          Forgot email or trouble signing in?{' '}
          <span className="underline cursor-pointer">Get help.</span>
        </p>
        <p className="text-normal font-light text-black/60">
          Click "Sign In" to agree to Medium's{' '}
          <span className="underline cursor-pointer">Terms of Service</span> and
          acknowledge that Medium's{' '}
          <span className="underline cursor-pointer">Privacy Policy</span>{' '}
          applies to you.
        </p>
      </div>
    </div>
  );
};

export default SignInPage;
