import AuthenticationForm from '../forms/AuthenticationForm';
import SignInDialog from './SignInDialog';

const SignInWithEmail = () => {
  return (
    <div className="grid items-center justify-center h-full">
      <div className="flex flex-col justify-center gap-7 mt-32">
        <h2 className="serif text-xl text-black/95">Sign in with email</h2>
        <p className="text-base max-w-[316px]">
          Enter the email address associated with your account, and we’ll send a
          magic link to your inbox.
        </p>
      </div>
      <div className="mb-28">
        <AuthenticationForm isLogin={true} element={<SignInDialog />} />
      </div>
    </div>
  );
};

export default SignInWithEmail;
