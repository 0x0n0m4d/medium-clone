import { ReactNode } from 'react';
import OpenModalButton from '../modals/OpenModalButton';
import SignInPage from './SignInPage';
import SignUpPage from './SignUpPage';

interface Props {
  children: ReactNode;
  isSignUpPage: boolean;
}

const AuthenticationPage = ({ children, isSignUpPage }: Props) => {
  return (
    <div className="grid place-items-center h-full">
      <h2 className="serif text-black/95 text-[28px]">
        {isSignUpPage ? 'Join Medium.' : 'Welcome back.'}
      </h2>
      <div>
        {children}
        {isSignUpPage ? (
          <p className="text-xl">
            Already have an account?{' '}
            <OpenModalButton
              className="text-lime-600 hover:text-lime-700"
              element={<SignInPage />}
            >
              <b>Sign In</b>
            </OpenModalButton>
          </p>
        ) : (
          <p className="text-xl">
            No account?{' '}
            <OpenModalButton
              className="text-lime-600 hover:text-lime-700"
              element={<SignUpPage />}
            >
              <b>Create one</b>
            </OpenModalButton>
          </p>
        )}
      </div>
      <div className="mx-20">
        {!isSignUpPage && (
          <p className="text-normal font-light text-black/60 mb-14">
            Forgot email or trouble signing in?{' '}
            <span className="underline cursor-pointer">Get help.</span>
          </p>
        )}
        <p className="text-normal font-light text-black/60">
          Click {isSignUpPage ? '"Sign Up"' : '"Sign In"'} to agree to Medium's{' '}
          <span className="underline cursor-pointer">Terms of Service</span> and
          acknowledge that Medium's{' '}
          <span className="underline cursor-pointer">Privacy Policy</span>{' '}
          applies to you.
        </p>
      </div>
    </div>
  );
};

export default AuthenticationPage;
