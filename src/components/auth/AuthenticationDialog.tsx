import { ReactNode } from 'react';
import OpenModalButton from '../modals/OpenModalButton';
import SignInDialog from './SignInDialog';
import SignUpDialog from './SignUpDialog';

interface Props {
  children: ReactNode;
  isSignUpPage: boolean;
  redirectUrl?: string;
}

const AuthenticationDialog = ({
  children,
  isSignUpPage,
  redirectUrl
}: Props) => {
  return (
    <div className="grid place-items-center h-full">
      <h2 className="serif text-black/95 text-xl mt-10">
        {isSignUpPage
          ? redirectUrl === 'new-story'
            ? 'Create an account to start writing.'
            : 'Join Medium.'
          : 'Welcome back.'}
      </h2>
      {redirectUrl === 'new-story' && !isSignUpPage && (
        <h4 className="serif text-base text-center leading-[24px] text-black/90 max-w-[316px] my-7">
          Sign in to get personalized story recommendations, follow authors and
          topics you love, and interact with stories.
        </h4>
      )}
      <div>
        {children}
        {isSignUpPage ? (
          <p className="text-base">
            Already have an account?{' '}
            <OpenModalButton
              className="text-primary hover:text-phover"
              element={<SignInDialog redirectUrl={redirectUrl} />}
            >
              <b>Sign In</b>
            </OpenModalButton>
          </p>
        ) : (
          <p className="text-base">
            No account?{' '}
            <OpenModalButton
              className="text-primary hover:text-phover"
              element={<SignUpDialog redirectUrl={redirectUrl} />}
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
