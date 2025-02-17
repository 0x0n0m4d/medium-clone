'use client';

import { ReactNode, useContext, useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import DatePickerMenu from '@/components/gift/DatePickerMenu';
import Logo from '@/components/Logo';
import AuthContext from '@/contexts/AuthContext';
import Loading from '../loading';

const Page = () => {
  const router = useRouter();
  const { user, error } = useContext(AuthContext);
  const [, , removeCookie] = useCookies(['access_token']);
  const [userIsLogged, setUserIsLogged] = useState<boolean | null>(null);

  const [recipientName, setRecipientName] = useState<string>('');
  const [recipientEmail, setRecipientEmail] = useState<string>('');
  const [date, setDate] = useState<Date>(new Date());
  const [senderName, setSenderName] = useState<string>('');
  const [senderEmail, setSenderEmail] = useState<string>('');
  const [giftMessage, setGiftMessage] = useState<string>('');

  const Content = (): ReactNode => {
    if (error) {
      removeCookie('access_token', { path: '/', sameSite: 'lax' });
      router.push('/');
      window.location.reload();
    }

    if (userIsLogged === false) {
      router.push('/m/signin');
      window.location.reload();
    }

    return (
      <section className="w-screen h-full flex flex-col bg-white">
        <nav className="w-full flex justify-center items-center py-6 border-b border-solid border-black/5">
          <Link href="/">
            <Logo />
          </Link>
        </nav>
        <div className="w-full h-full flex flex-col justify-center items-center gap-y-8 mt-36 mb-10">
          <h1 className="serif text-2xl sm:text-[48px] text-center max-w-[580px] leading-[45px]">
            The world needs more readers & writers.
          </h1>
          <p className="text-md text-start max-w-[680px]">
            An annual Medium membership is a great gift for the reader or writer
            in your life—they can read any article in our entire library across
            all devices, access our global community of writers, and support the
            writers they read the most.
          </p>
          <p className="text-md text-start max-w-[680px]">
            For only $50, give them the gift of Medium. Include a personal note,
            and schedule delivery for any date you wish—what are you waiting
            for?
          </p>
        </div>
        <form className="flex flex-col w-full h-full justify-center items-center mt-5">
          <div className="w-full max-w-[680px] flex flex-col justify-center items-start">
            <div className="flex flex-col gap-y-3 mb-8">
              <h2 className="font-bold text-md">Who is this gift for?</h2>
              <p className="text-start text-base italic text-stone-500">
                The recipient will receive an email on the delivery date with a
                coupon code to redeem their membership. If you plan to purchase
                more than 10 gifts, please submit a request at{' '}
                <Link href="/" target="_blank" className="underline">
                  help.medium.com
                </Link>
              </p>
            </div>
            <label className="text-base mb-3">Recipient name:</label>
            <input
              className="outline-none px-5 py-3.5 rounded-lg w-full bg-stone-200/60 focus:bg-stone-50 focus:border focus:border-solid focus:border-black text-base mb-8"
              onChange={e => setRecipientName(e.target.value)}
              value={recipientName}
            />
            <label className="text-base mb-3">Recipient email:</label>
            <input
              className="outline-none px-5 py-3.5 rounded-lg w-full bg-stone-200/60 focus:bg-stone-50 focus:border focus:border-solid focus:border-black text-base mb-8"
              type="email"
              onChange={e => setRecipientEmail(e.target.value)}
              value={recipientEmail}
            />
            <label className="text-base mb-3">Delivery date:</label>
            <div className="relative w-full">
              <DatePickerMenu selectedDate={date} setSelectedDate={setDate} />
            </div>
            <h2 className="text-md text-bold mb-8">From:</h2>
            <label className="text-base mb-3">Sender name:</label>
            <input
              className="outline-none px-5 py-3.5 rounded-lg w-full bg-stone-200/60 focus:bg-stone-50 focus:border focus:border-solid focus:border-black text-base mb-8"
              onChange={e => setSenderName(e.target.value)}
              value={senderName}
            />
            <label className="text-base mb-3">Sender email:</label>
            <input
              className="outline-none px-5 py-3.5 rounded-lg w-full bg-stone-200/60 focus:bg-stone-50 focus:border focus:border-solid focus:border-black text-base mb-8"
              type="email"
              onChange={e => setSenderEmail(e.target.value)}
              value={senderEmail}
            />
            <div className="mb-10 flex flex-col items-start justify-center w-full">
              <label className="text-base mb-3">(Optional) Gift message:</label>
              <textarea
                className="outline-none px-5 py-3.5 rounded-lg w-full bg-stone-200/60 focus:bg-stone-50 focus:border focus:border-solid focus:border-black text-base min-h-[90px] resize-none"
                placeholder="Add your message"
                onChange={e => setGiftMessage(e.target.value)}
                value={giftMessage}
                maxLength={280}
              />
              <span className="w-full flex justify-end text-xs mt-2">
                {giftMessage.length}
                <span className="text-black/60">/280</span>
              </span>
            </div>
            <div className="h-full min-h-[100px] w-full flex flex-col items-center">
              <Link
                href="/"
                className="h-auto text-sm text-white bg-primary hover:bg-phover py-3 px-7 rounded-full"
              >
                Continue to payment
              </Link>
            </div>
          </div>
        </form>
      </section>
    );
  };

  useEffect(() => {
    if (userIsLogged === null) {
      if (user) {
        setUserIsLogged(true);
        setSenderName(user.name);
        setSenderEmail(user.email);
      } else if (user === null) {
        setUserIsLogged(false);
      }
    }
  }, [userIsLogged, user]);

  return userIsLogged === null ? <Loading /> : <Content />;
};

export default Page;
