import ButtonWithIcon from '../../atoms/ButtonWithIcon';
import AuthenticationPage from './AuthenticationPage';

const SignInPage = () => {
  return (
    <AuthenticationPage isSignUpPage={false}>
      <ul className="grid gap-4 place-items-center mb-14">
        <li className="flex relative border border-solid border-black/70 rounded-full w-[300px] h-[42.5px]">
          <ButtonWithIcon
            icon={<i className="fa-brands fa-google" />}
            text="Sign in with google"
            onClick={() => {}}
          />
        </li>
        <li className="flex relative border border-solid border-black/70 rounded-full w-[300px] h-[42.5px]">
          <ButtonWithIcon
            icon={<i className="fa-brands fa-facebook text-blue-500" />}
            text="Sign in with Facebook"
            onClick={() => {}}
          />
        </li>
        <li className="flex relative border border-solid border-black/70 rounded-full w-[300px] h-[42.5px]">
          <ButtonWithIcon
            icon={<i className="fa-brands fa-apple" />}
            text="Sign in with Apple"
            onClick={() => {}}
          />
        </li>
        <li className="flex relative border border-solid border-black/70 rounded-full w-[300px] h-[42.5px]">
          <ButtonWithIcon
            icon={<i className="fa-brands fa-x-twitter thin-icon" />}
            text="Sign in with X"
            onClick={() => {}}
          />
        </li>
        <li className="flex relative border border-solid border-black/70 rounded-full w-[300px] h-[42.5px]">
          <ButtonWithIcon
            icon={<i className="fa-regular fa-envelope thin-icon" />}
            text="Sign in with email"
            onClick={() => {}}
          />
        </li>
      </ul>
    </AuthenticationPage>
  );
};

export default SignInPage;
