import Link from 'next/link';
import Logo from './Logo';

interface Props {
  isLogin: boolean;
}

const EmailTemplate = ({ isLogin }: Props) => {
  const url = `${process.env.NEXT_PUBLIC_URL}/m/callback/email?token=someTokhen0&operation=${isLogin ? 'login' : 'register'}&state=medium`;
  return (
    <div>
      <Logo />
      <div>
        <h2>Your login link</h2>
        <p>
          Click the link below to confirm your email and finish creating your
          Medium account. This link will expire in 2 hours and can only be used
          once.
        </p>
        <button>Create your account</button>
        <p>
          If the button above doesn’t work, paste this link into your web
          browser:
          <Link href={url}>{url}</Link>
        </p>
        <p>
          If you did not make this request, you can safely ignore this email.
        </p>
      </div>
      <div>
        Sent by{' '}
        <Link href={`${process.env.NEXT_PUBLIC_URL}`} className="underline">
          Medium
        </Link>{' '}
        · Medium, 548 Market St, PMB 42061, San Francisco, CA 94104
      </div>
    </div>
  );
};

export default EmailTemplate;
