import { MouseEventHandler, useState } from 'react';

interface Props {
  onSubmit: Function;
  id: string;
  onClick: MouseEventHandler;
}

const EmailForm = ({ onSubmit, id, onClick }: Props) => {
  const [email, setEmail] = useState('');

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        onSubmit(email);
      }}
      className="flex flex-col items-center gap-2"
    >
      <div className="flex flex-col items-center gap-3 mt-10 mb-10">
        <label
          htmlFor={id}
          className="text-[14px] leading-[20px] text-center text-black/75"
        >
          Your email
        </label>
        <input
          type="email"
          id={id}
          onChange={e => setEmail(e.target.value)}
          value={email}
          className="bg-stone-100 focus:bg-stone-100/50 border border-solid focus:border-black w-[270px] py-3 px-3 rounded-md duration-300 text-center outline-none"
          required
        />
      </div>
      <button
        type="submit"
        className="w-[226px] text-white text-md py-2.5 px-3 bg-black/90 hover:bg-black rounded-full"
      >
        Continue
      </button>
      <div className="flex mt-8">
        <button
          className="text-sm text-primary hover:text-phover transition duration-200"
          onClick={onClick}
        >
          <i className="fa-solid fa-chevron-left thin-icon text-sm" />
          &nbsp;&nbsp; All sign in options
        </button>
      </div>
    </form>
  );
};

export default EmailForm;
