import ButtonWithIcon from '../../atoms/ButtonWithIcon';
import AuthenticationPage from './AuthenticationPage';

const SignInPage = () => {
  return (
    <AuthenticationPage isSignUpPage={false}>
      <ul className="grid gap-4 place-items-center mb-14">
        <li className="flex relative border border-solid border-black rounded-full w-[300px] h-[42.5px]">
          <ButtonWithIcon
            icon={<i className="fa-brands fa-google" />}
            text="Sign in with google"
            onClick={() => {}}
          />
        </li>
        <li className="flex relative border border-solid border-black rounded-full w-[300px] h-[42.5px]">
          <ButtonWithIcon
            icon={<i className="fa-regular fa-envelope" />}
            text="Sign in with email"
            onClick={() => {}}
          />
        </li>
      </ul>
    </AuthenticationPage>
  );
};

export default SignInPage;
