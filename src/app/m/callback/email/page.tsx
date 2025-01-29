'use client';

import { useSearchParams } from 'next/navigation';
import EmailCallback from '@/components/auth/EmailCallback';
import Loading from '@/components/Loading';

const Page = () => {
  const searchParams = useSearchParams();

  const token = searchParams.get('token');
  const isLogin = searchParams.get('operation') !== 'register';

  if (!token) return <Loading />;

  return <EmailCallback token={token} isLogin={isLogin} />;
};

export default Page;
