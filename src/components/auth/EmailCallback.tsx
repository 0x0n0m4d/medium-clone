import { ReactNode, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { redirect } from 'next/navigation';
import { fetchTempData } from '@/src/redux/slices/tempData.slice';
import { AppDispatch } from '@/src/redux/store';
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
    if (!tempData.data) {
      return <Loading />;
    }
    if (tempData.error) {
      return <TokenErrorDialog isLogin={isLogin} />;
    }
    const currentDate = new Date().setDate(new Date().getHours());
    if (tempData.data!.expirationTime < currentDate) {
      return <ExpiredEmailDialog isLogin={isLogin} />;
    }

    if (isLogin) redirect('/');

    return <CreateAccountPage email={tempData.data.email} />;
  };

  useEffect(() => {
    if (!tempData.data) {
      dispatch(fetchTempData(token));
    }
  }, [tempData, token]);

  return <div>{tempData.isLoading ? <Loading /> : <Content />}</div>;
};

export default EmailCallback;
