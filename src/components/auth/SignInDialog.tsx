'use client';

import { useContext } from 'react';
import ButtonWithIcon from '@/atoms/ButtonWithIcon';
import ModalContext from '@/contexts/ModalContext';
import AuthenticationDialog from './AuthenticationDialog';
import SignInWithEmail from './SignInWithEmail';

const SignInDialog = () => {
  const { setModalOpen } = useContext(ModalContext);
  return (
    <AuthenticationDialog isSignUpPage={false}>
      <ul className="grid gap-4 place-items-center mb-14">
        <li className="flex relative border border-solid border-black/70 rounded-full w-[300px] h-[42.5px]">
          <ButtonWithIcon icon="fa-brands fa-google" onClick={() => {}}>
            Sign in with google
          </ButtonWithIcon>
        </li>
        <li className="flex relative border border-solid border-black/70 rounded-full w-[300px] h-[42.5px]">
          <ButtonWithIcon
            icon="fa-brands fa-facebook text-blue-500"
            onClick={() => {}}
          >
            Sign in with Facebook
          </ButtonWithIcon>
        </li>
        <li className="flex relative border border-solid border-black/70 rounded-full w-[300px] h-[42.5px]">
          <ButtonWithIcon icon="fa-brands fa-apple" onClick={() => {}}>
            Sign in with Apple
          </ButtonWithIcon>
        </li>
        <li className="flex relative border border-solid border-black/70 rounded-full w-[300px] h-[42.5px]">
          <ButtonWithIcon
            icon="fa-brands fa-x-twitter thin-icon"
            onClick={() => {}}
          >
            Sign in with X
          </ButtonWithIcon>
        </li>
        <li className="flex relative border border-solid border-black/70 rounded-full w-[300px] h-[42.5px]">
          <ButtonWithIcon
            icon="fa-regular fa-envelope thin-icon"
            onClick={() => setModalOpen(true, <SignInWithEmail />)}
          >
            Sign in with email
          </ButtonWithIcon>
        </li>
      </ul>
    </AuthenticationDialog>
  );
};

export default SignInDialog;
