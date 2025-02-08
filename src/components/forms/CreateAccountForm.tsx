'use client';

import { useState } from 'react';
import { useCookies } from 'react-cookie';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { createUserSession } from '@/redux/slices/userData.slice';
import { AppDispatch } from '@/redux/store';

interface Props {
  email: string;
}

const CreateAccountForm = ({ email }: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const [name, setName] = useState('');
  const [isPending, setIsPending] = useState(false);
  const [_, setCookies] = useCookies();
  const route = useRouter();

  const handleSubmit = async () => {
    const action = await dispatch(createUserSession({ email, name }));
    return action.payload.jwt;
  };

  return (
    <form
      className="flex flex-col items-center gap-2 mt-16"
      onSubmit={e => {
        e.preventDefault();
        setIsPending(true);

        handleSubmit()
          .then(jwt => {
            const exp = new Date();
            exp.setHours(exp.getHours() + 24);
            setCookies('access_token', jwt, {
              path: '/',
              sameSite: 'lax',
              expires: exp
            });
          })
          .finally(() => {
            setIsPending(false);
            route.push('/');
          });
      }}
    >
      <div className="flex flex-col items-center gap-2">
        <label className="text-xs leading-[20px] text-center text-black/50">
          Your full name
        </label>
        <input
          type="name"
          className="border-b border-solid border-stone-200 w-[450px] py-3.5 px-3 rounded-md duration-300 text-start text-sm outline-none"
          onChange={e => setName(e.target.value)}
          value={name}
          required
        />
        <label className="mt-2 text-xs leading-[20px] text-center text-black/50">
          Your email
        </label>
        <input
          type="email"
          className="w-[450px] py-3.5 px-3 rounded-md duration-300 text-center text-sm outline-none text-black/85"
          defaultValue={email}
          readOnly
        />
      </div>
      <button
        type="submit"
        className="mt-2 text-white text-sm py-3 px-7 bg-black/90 hover:bg-black disabled:bg-black/50 transition rounded-full"
        disabled={isPending}
      >
        Create Account
      </button>
    </form>
  );
};

export default CreateAccountForm;
