import { MouseEventHandler, ReactNode } from 'react';

interface Props {
  icon: ReactNode;
  text: string;
  onClick: MouseEventHandler;
}

const ButtonWithIcon = ({ icon, text, onClick }: Props) => {
  return (
    <button
      className="w-full h-full flex justify-center align-center"
      onClick={onClick}
    >
      <span className="floating-icon absolute text-2xl">{icon}</span>
      <span className="button-text text-black/80 tracking-tight my-auto">
        {text}
      </span>
    </button>
  );
};

export default ButtonWithIcon;
