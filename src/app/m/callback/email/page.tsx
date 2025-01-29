'use client';

import { useSearchParams } from 'next/navigation';
import EmailCallback from '@/src/components/auth/EmailCallback';
import Loading from '@/src/components/Loading';

const Page = () => {
  const searchParams = useSearchParams();

  const token = searchParams.get('token');
  const isLogin = searchParams.get('operation') !== 'register';

  if (!token) return <Loading />;

  return <EmailCallback token={token} isLogin={isLogin} />;
};

export default Page;
