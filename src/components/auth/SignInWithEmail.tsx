import EmailForm from '../forms/EmailForm';

const SignInWithEmail = () => {
  return (
    <div>
      <h2 className="serif text-xl">Sign up with email</h2>
      <p>
        Enter the email address associated with your account, and we’ll send a
        magic link to your inbox.
      </p>
      <EmailForm onSubmit={() => {}} id="sign-in-email" />
    </div>
  );
};

export default SignInWithEmail;
