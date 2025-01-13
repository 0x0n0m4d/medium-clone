import EmailForm from '../forms/EmailForm';

const SignUpWithEmail = () => {
  return (
    <div>
      <h2 className="serif">Sign up with</h2>
      <p>Enter your email address to create an account.</p>
      <EmailForm onSubmit={() => {}} id="sign-up-email" />
    </div>
  );
};

export default SignUpWithEmail;
