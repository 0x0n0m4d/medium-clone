import { ReactNode } from 'react';
import OpenModalButton from '../modals/OpenModalButton';
import SignInDialog from './SignInDialog';
import SignUpDialog from './SignUpDialog';

interface Props {
  children: ReactNode;
  isSignUpPage: boolean;
}

const AuthenticationDialog = ({ children, isSignUpPage }: Props) => {
  return (
    <div className="grid place-items-center h-full">
      <h2 className="serif text-black/95 text-xl mt-10">
        {isSignUpPage ? 'Join Medium.' : 'Welcome back.'}
      </h2>
      <div>
        {children}
        {isSignUpPage ? (
          <p className="text-base">
            Already have an account?{' '}
            <OpenModalButton
              className="text-primary hover:text-phover"
              element={<SignInDialog />}
            >
              <b>Sign In</b>
            </OpenModalButton>
          </p>
        ) : (
          <p className="text-base">
            No account?{' '}
            <OpenModalButton
              className="text-primary hover:text-phover"
              element={<SignUpDialog />}
            >
              <b>Create one</b>
            </OpenModalButton>
          </p>
        )}
      </div>
      <div className="mx-32">
        {!isSignUpPage && (
          <p className="text-xs font-light text-black/60 mb-14">
            Forgot email or trouble signing in?{' '}
            <span className="underline cursor-pointer">Get help.</span>
          </p>
        )}
        <p className="text-xs font-light text-black/60">
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

export default AuthenticationDialog;
