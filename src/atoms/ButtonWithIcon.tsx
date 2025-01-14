import { MouseEventHandler, ReactNode } from 'react';

interface Props {
  icon: string;
  children: ReactNode;
  onClick: MouseEventHandler;
}

const ButtonWithIcon = ({ icon, children, onClick }: Props) => {
  return (
    <button
      className="w-full h-full flex justify-center items-center"
      onClick={onClick}
    >
      <span className="floating-icon absolute icon-size">
        <i className={icon} />
      </span>
      <span className="text-base text-black/80 tracking-tight my-auto">
        {children}
      </span>
    </button>
  );
};

export default ButtonWithIcon;
