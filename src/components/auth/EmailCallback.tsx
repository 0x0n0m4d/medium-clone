'use client';

import { ReactNode, useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import {
  fetchTempData,
  setTokenAlreadyUsed
} from '@/redux/slices/tempData.slice';
import { getUserData } from '@/redux/slices/userData.slice';
import { AppDispatch } from '@/redux/store';
import Loading from '../Loading';
import CreateAccountPage from './CreateAccountPage';
import ExpiredEmailDialog from './ExpiredEmailDialog';
import TokenErrorDialog from './TokenErrorDialog';

interface Props {
  token: string;
  isLogin: boolean;
}

const EmailCallback = ({ token, isLogin }: Props) => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const tempData = useSelector((state: any) => state.tempData);
  const [userExist, setUserExist] = useState<boolean | undefined>(undefined);
  const [, setCookies] = useCookies(['access_token']);

  const Content = (): ReactNode => {
    if (tempData.error) {
      return <TokenErrorDialog isLogin={isLogin} />;
    }
    if (!tempData.data || userExist === undefined) {
      return <Loading />;
    }
    const currentDate = new Date();
    if (
      tempData.data?.expirationTime < currentDate ||
      tempData.data?.alreadyUsed
    ) {
      return <ExpiredEmailDialog isLogin={isLogin} />;
    }

    if (userExist) {
      router.push(tempData.data.redirectUrl);
      window.location.reload();
    }

    return (
      <CreateAccountPage
        email={tempData.data.email}
        redirectUrl={tempData.data.redirectUrl}
      />
    );
  };

  useEffect(() => {
    if (!tempData.data && !tempData.isLoading) {
      dispatch(fetchTempData(token)).then(async () => {
        await dispatch(getUserData(token)).then(async res => {
          if (res.payload) {
            await dispatch(setTokenAlreadyUsed(token)).then(() => {
              const exp = new Date();
              exp.setHours(exp.getHours() + 24);
              setCookies('access_token', res.payload, {
                path: '/',
                sameSite: 'lax',
                expires: exp
              });
              setUserExist(true);
            });
          } else {
            setUserExist(false);
          }
        });
      });
    }
  }, [tempData, token]);

  return <div>{tempData.isLoading ? <Loading /> : <Content />}</div>;
};

export default EmailCallback;
