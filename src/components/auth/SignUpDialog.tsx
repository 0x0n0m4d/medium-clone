'use client';

import { useContext } from 'react';
import ButtonWithIcon from '@/atoms/ButtonWithIcon';
import ModalContext from '@/contexts/ModalContext';
import AuthenticationDialog from './AuthenticationDialog';
import SignUpWithEmail from './SignUpWithEmail';

const SignUpDialog = () => {
  const { setModalOpen } = useContext(ModalContext);
  return (
    <AuthenticationDialog isSignUpPage={true}>
      <ul className="grid gap-4 place-items-center mb-32 w-full">
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
    </AuthenticationDialog>
  );
};

export default SignUpDialog;
