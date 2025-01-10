import OpenModalButton from '../modals/OpenModalButton';
import AuthenticationButton from './AuthenticationButton';
import SignInPage from './SignInPage';

const SignUpPage = () => {
  return (
    <div className="grid place-items-center h-full">
      <h2 className="serif text-black/95 text-[28px]">Join Medium.</h2>
      <div>
        <ul className="grid gap-4 place-items-center mb-14">
          <li>
            <AuthenticationButton
              icon={<i className="fa-brands fa-google" />}
              text="Sign up with google"
              onClick={() => {}}
            />
          </li>
          <li>
            <AuthenticationButton
              icon={<i className="fa-regular fa-envelope" />}
              text="Sign up with email"
              onClick={() => {}}
            />
          </li>
        </ul>
        <p className="test-lg">
          Already have an account?{' '}
          <OpenModalButton
            className="font-extrabold text-[var(--homepage-main-color)] hover:text-yellow-600"
            element={<SignInPage />}
          >
            Sign In
          </OpenModalButton>
        </p>
      </div>
      <p className="mx-20 text-normal font-light text-black/60">
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
