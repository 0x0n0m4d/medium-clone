'use client';

import { useContext, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import SignInDialog from '@/src/components/auth/SignInDialog';
import SignUpDialog from '@/src/components/auth/SignUpDialog';
import ModalContext from '@/src/components/modals/ModalContext';

const Page = () => {
  const { setModalOpen, setIsDialog } = useContext(ModalContext);
  const searchParams = useSearchParams();

  const isLogin = searchParams.get('operation') !== 'register';

  useEffect(() => {
    setIsDialog(false);
    if (isLogin) {
      setModalOpen(true, <SignUpDialog />);
    } else {
      setModalOpen(true, <SignInDialog />);
    }
  }, [isLogin]);

  return <div className="bg-white" />;
};

export default Page;
