import EmailForm from '../forms/EmailForm';

const SignInWithEmail = () => {
  return (
    <div>
      <h2 className="serif">Sign up with email</h2>
      <p>Enter your email address to create an account</p>
      <EmailForm onSubmit={() => {}} id="sign-in-email" />
    </div>
  );
};

export default SignInWithEmail;
