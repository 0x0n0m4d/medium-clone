import { ReactNode, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { redirect } from 'next/navigation';
import {
  fetchTempData,
  setTokenAlreadyUsed
} from '@/redux/slices/tempData.slice';
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
  const dispatch = useDispatch<AppDispatch>();
  const tempData = useSelector((state: any) => state.tempData);

  const Content = (): ReactNode => {
    if (tempData.error) {
      return <TokenErrorDialog isLogin={isLogin} />;
    }
    if (!tempData.data) {
      return <Loading />;
    }
    const currentDate = new Date();
    if (
      tempData.data?.expirationTime < currentDate ||
      tempData.data?.alreadyUsed
    ) {
      return <ExpiredEmailDialog isLogin={isLogin} />;
    }

    dispatch(setTokenAlreadyUsed(token));
    if (isLogin) redirect(tempData.data.redirectUrl);
    return (
      <CreateAccountPage
        email={tempData.data.email}
        redirectUrl={tempData.data.redirectUrl}
      />
    );
  };

  useEffect(() => {
    if (!tempData.data && !tempData.isLoading) {
      dispatch(fetchTempData(token));
    }
  }, [tempData, token]);

  return <div>{tempData.isLoading ? <Loading /> : <Content />}</div>;
};

export default EmailCallback;
