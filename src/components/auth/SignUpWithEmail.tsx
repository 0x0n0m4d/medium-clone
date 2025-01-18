import AuthenticationForm from '../forms/AuthenticationForm';
import SignUpDialog from './SignUpDialog';

const SignUpWithEmail = () => {
  return (
    <div className="grid items-center justify-center h-full">
      <div className="flex flex-col justify-center gap-7 mt-32">
        <h2 className="serif text-xl text-black/95">Sign up with email</h2>
        <p className="text-base max-w-[316px]">
          Enter your email address to create an account.
        </p>
      </div>
      <AuthenticationForm
        isLogin={false}
        onSubmit={() => {}}
        element={<SignUpDialog />}
      />
      <p className="text-sm font-light text-black/60 max-w-[324px] mb-28 mt-5">
        This site is protected by reCAPTCHA Enterprise and the{' '}
        <span className="underline cursor-pointer">Google Privacy Policy</span>{' '}
        and <span className="underline cursor-pointer">Terms of Service</span>{' '}
        apply.
      </p>
    </div>
  );
};

export default SignUpWithEmail;
