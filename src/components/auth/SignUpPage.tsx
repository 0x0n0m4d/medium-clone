import { useContext } from 'react';
import ButtonWithIcon from '../../atoms/ButtonWithIcon';
import ModalContext from '../modals/ModalContext';
import AuthenticationPage from './AuthenticationPage';
import SignUpWithEmail from './SignUpWithEmail';

const SignUpPage = () => {
  const { setModalOpen } = useContext(ModalContext);
  return (
    <AuthenticationPage isSignUpPage={true}>
      <ul className="grid gap-4 place-items-center mb-14 w-full">
        <li className="flex relative border border-solid border-black/70 rounded-full w-[300px] h-[42.5px]">
          <ButtonWithIcon icon="fa-brands fa-google" onClick={() => {}}>
            Sign up with google
          </ButtonWithIcon>
        </li>
        <li className="flex relative border border-solid border-black/70 rounded-full w-[300px] h-[42.5px]">
          <ButtonWithIcon
            icon="fa-brands fa-facebook text-blue-500"
            onClick={() => {}}
          >
            Sign up with Facebook
          </ButtonWithIcon>
        </li>
        <li className="flex relative border border-solid border-black/70 rounded-full w-[300px] h-[42.5px]">
          <ButtonWithIcon
            icon="fa-regular fa-envelope text-black thin-icon"
            onClick={() => setModalOpen(true, <SignUpWithEmail />)}
          >
            Sign up with email
          </ButtonWithIcon>
        </li>
      </ul>
    </AuthenticationPage>
  );
};

export default SignUpPage;
