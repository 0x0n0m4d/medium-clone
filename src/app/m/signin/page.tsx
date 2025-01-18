'use client';

import { useContext, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import SignInDialog from '@/src/components/auth/SignInDialog';
import SignUpDialog from '@/src/components/auth/SignUpDialog';
import ModalContext from '@/src/components/modals/ModalContext';

const Page = () => {
  const { setModalOpen, setIsDialog } = useContext(ModalContext);
  const searchParams = useSearchParams();

  const isSignup = searchParams.get('operation') === 'register';

  useEffect(() => {
    setIsDialog(false);
    if (isSignup) {
      setModalOpen(true, <SignUpDialog />);
    } else {
      setModalOpen(true, <SignInDialog />);
    }
  }, [isSignup]);

  return <div className="bg-white" />;
};

export default Page;
