'use client';

import { useContext, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import ExpiredEmailDialog from '@/src/components/auth/ExpiredEmailDialog';
import SignInDialog from '@/src/components/auth/SignInDialog';
import SignUpDialog from '@/src/components/auth/SignUpDialog';
import TokenErrorDialog from '@/src/components/auth/TokenErrorDialog';
import Loading from '@/src/components/Loading';
import ModalContext from '@/src/components/modals/ModalContext';

const Page = () => {
  const { setModalOpen, setIsDialog } = useContext(ModalContext);
  const searchParams = useSearchParams();

  const token = searchParams.get('token');
  const isLogin = searchParams.get('operation') !== 'register';

  if (!token) return <Loading />;

  let linkHasExpired: boolean;
  switch (token) {
    case 'expired': {
      linkHasExpired = true;
      break;
    }
    case 'error': {
      try {
        throw new Error(
          'The token checks was not of the correct type, or has already been used'
        );
      } catch (error) {
        console.log('[ERROR_INVALID_TOKEN]', error);
        return <TokenErrorDialog isLogin={false} />;
      }
    }
    default: {
      linkHasExpired = false;
      break;
    }
  }

  useEffect(() => {
    setIsDialog(false);

    if (!linkHasExpired) {
      if (isLogin) {
        setModalOpen(true, <SignInDialog />);
      } else {
        setModalOpen(true, <SignUpDialog />);
      }
    }
  }, [linkHasExpired, isLogin]);

  return !linkHasExpired ? (
    <div className="bg-white" />
  ) : (
    <ExpiredEmailDialog isLogin={isLogin} />
  );
};

export default Page;
