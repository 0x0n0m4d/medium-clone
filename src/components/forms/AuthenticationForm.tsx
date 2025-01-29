'use client';

import { ReactNode, useContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveTempData } from '@/redux/slices/tempData.slice';
import CheckInboxDialog from '../auth/CheckInboxDialog';
import TokenErrorDialog from '../auth/TokenErrorDialog';
import ModalContext from '../modals/ModalContext';
import OpenModalButton from '../modals/OpenModalButton';

interface Props {
  isLogin: boolean;
  element: ReactNode;
}

const AuthenticationForm = ({ isLogin, element }: Props) => {
  const dispatch = useDispatch<any>();
  const { setModalOpen } = useContext(ModalContext);
  const [email, setEmail] = useState('');
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = async () => {
    const data = await dispatch(saveTempData({ email, isLogin }));
    return data;
  };

  return (
    <form className="flex flex-col items-center gap-2">
      <div className="flex flex-col items-center gap-3 mt-10 mb-10">
        <label className="text-sm leading-[20px] text-center text-black/75">
          Your email
        </label>
        <input
          type="email"
          onChange={e => setEmail(e.target.value)}
          value={email}
          className="bg-stone-100 focus:bg-stone-100/50 focus:border focus:border-solid focus:border-black w-[270px] py-5 px-3 rounded-md duration-300 text-center text-sm outline-none"
          required
        />
      </div>
      <button
        className="w-[226px] text-white text-sm py-4 px-2.5 bg-black/90 hover:bg-black disabled:bg-black/70 rounded-full"
        onClick={e => {
          e.preventDefault();
          setIsPending(true);

          handleSubmit()
            .then(data => {
              if (data) {
                setModalOpen(
                  true,
                  <CheckInboxDialog email={email} isLogin={isLogin} />
                );
              } else {
                setModalOpen(true, <TokenErrorDialog isLogin={isLogin} />);
              }
            })
            .catch(error => {
              console.log('[ERROR_SEND_MAIL_ACTION]', error);
              setModalOpen(true, <TokenErrorDialog isLogin={isLogin} />);
            })
            .finally(() => setIsPending(false));
        }}
        disabled={isPending}
      >
        Continue
      </button>
      <div className="flex mt-8">
        <OpenModalButton
          element={element}
          className="text-sm text-primary hover:text-phover transition duration-200"
        >
          <i className="fa-solid fa-chevron-left thin-icon text-sm" />
          {isLogin ? '  All sign in options' : '  All sign up options'}
        </OpenModalButton>
      </div>
    </form>
  );
};

export default AuthenticationForm;
