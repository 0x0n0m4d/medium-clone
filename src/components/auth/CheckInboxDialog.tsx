import { useContext } from 'react';
import Image from 'next/image';
import ModalContext from '@/contexts/ModalContext';

interface Props {
  email: string;
  isLogin: boolean;
}

const CheckInboxDialog = ({ email, isLogin }: Props) => {
  const { setModalOpen } = useContext(ModalContext);

  return (
    <div className="grid place-items-center justify-center h-full relative">
      <div className="flex flex-col justify-center gap-7 mt-20">
        <h2 className="serif text-black/95 text-xl mt-10">Check your inbox.</h2>
        {isLogin ? (
          <p className="text-center text-base max-w-[316px]">
            Click the link we sent to {email} to sign in.
          </p>
        ) : (
          <p className="text-center text-base max-w-[316px]">
            Click the link we sent to {email} to complete your account set-up.
          </p>
        )}
      </div>
      <button
        className="text-white text-center text-sm bg-black/90 hover:bg-black rounded-full px-7 py-3.5"
        onClick={() => setModalOpen(false)}
      >
        OK
      </button>
      <div className="min-h-[212px] -z-50" />
      <Image
        src="/assets/check_inbox_footer.png"
        alt="Footer banner"
        width={678}
        height={212}
        className="fixed bottom-0 object-cover max-w-[900px] h-[212px]"
      />
    </div>
  );
};

export default CheckInboxDialog;
