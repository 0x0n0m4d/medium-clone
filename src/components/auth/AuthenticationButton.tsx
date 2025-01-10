import { MouseEventHandler, ReactNode } from 'react';

interface Props {
  icon: ReactNode;
  text: string;
  onClick: MouseEventHandler;
}

const AuthenticationButton = ({ icon, text, onClick }: Props) => {
  return (
    <button
      className="flex relative align-center justify-center w-[300px] h-[42.5px] border-solid border border-black rounded-full"
      onClick={onClick}
    >
      <span className="absolute left-3 mt-1.5 text-2xl">{icon}</span>
      <span className="text-black/80 mt-2 text-xl tracking-tight">{text}</span>
    </button>
  );
};

export default AuthenticationButton;
