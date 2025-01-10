import ButtonWithIcon from '../../atoms/ButtonWithIcon';
import AuthenticationPage from './AuthenticationPage';

const SignUpPage = () => {
  return (
    <AuthenticationPage isSignUpPage={true}>
      <ul className="grid gap-4 place-items-center mb-14 w-full">
        <li className="flex relative border border-solid border-black rounded-full w-[300px] h-[42.5px]">
          <ButtonWithIcon
            icon={<i className="fa-brands fa-google" />}
            text="Sign up with google"
            onClick={() => {}}
          />
        </li>
        <li className="flex relative border border-solid border-black rounded-full w-[300px] h-[42.5px]">
          <ButtonWithIcon
            icon={<i className="fa-regular fa-envelope" />}
            text="Sign up with email"
            onClick={() => {}}
          />
        </li>
      </ul>
    </AuthenticationPage>
  );
};

export default SignUpPage;
