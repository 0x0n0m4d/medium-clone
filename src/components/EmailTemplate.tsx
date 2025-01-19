import {
  Button,
  Container,
  Heading,
  Hr,
  Html,
  Section,
  Text
} from '@react-email/components';
import Logo from './Logo';

interface Props {
  token: string;
  isLogin: boolean;
}

const EmailTemplate = ({ token, isLogin }: Props) => {
  const operation = isLogin ? 'login' : 'register';
  const url =
    `${process.env.NEXT_PUBLIC_URL}/m/callback/email?` +
    'token=' +
    token +
    '&operation=' +
    operation;
  return (
    <Html
      style={{
        backgroundColor: '#ffffff',
        fontFamily:
          "-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Ubuntu','Open Sans','Helvetica Neue',sans-serif",
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <Container
        style={{
          minWidth: '700px',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '20px 24px'
        }}
      >
        <Section
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'start',
            padding: '0px 58px'
          }}
        >
          <Logo />
        </Section>
        <Section
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'start',
            marginTop: '50px'
          }}
        >
          <Heading
            as="h1"
            style={{
              fontFamily: 'Georgia',
              fontSize: '28px',
              textAlign: 'start',
              color: '#333333',
              letterSpacing: '2px'
            }}
          >
            Your login link
          </Heading>
          <Text
            style={{
              textAlign: 'start',
              fontSize: '0.95rem',
              color: '#333333',
              lineHeight: '14px'
            }}
          >
            {isLogin
              ? `Click the link below to sign in to your Medium account.`
              : `Click the link below to confirm your email and finish creating your Medium account.`}
            <br />
            This link will expire in 2 hours and can only be used once.
          </Text>
          <Button
            href={url}
            style={{
              padding: '14px 28px',
              fontSize: '14px',
              color: '#ffffff',
              textAlign: 'center',
              backgroundColor: 'var(--primary)',
              borderRadius: '9999px',
              margin: '10px 0px'
            }}
          >
            {isLogin ? 'Sign in to Medium' : 'Create your account'}
          </Button>
          <Text
            style={{
              fontSize: '0.95rem',
              textAlign: 'start',
              color: '#333333',
              lineHeight: '14px'
            }}
          >
            If the button above doesn’t work, paste this link into your web
            browser:
            <br />
            <span className="underline">{url}</span>
          </Text>
          <Text
            className="serif text-md text-start text-black/40"
            style={{
              textAlign: 'start',
              fontSize: '16px',
              color: '#b3b3b1',
              lineHeight: '14px',
              marginTop: '40px'
            }}
          >
            If you did not make this request, you can safely ignore this email.
          </Text>
        </Section>
        <Hr
          style={{
            borderColor: '#8e8e8e',
            marginTop: '60px',
            width: '100%',
            minWidth: '556px'
          }}
        />
        <Section
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Text
            style={{
              fontSize: '12px',
              color: '#333333',
              textAlign: 'center',
              lineHeight: '4px'
            }}
          >
            Sent by{' '}
            <a
              href={`${process.env.NEXT_PUBLIC_URL}`}
              style={{ textDecoration: 'underline' }}
            >
              Medium
            </a>{' '}
            · Medium, 548 Market St, PMB 42061, San Francisco, CA 94104
          </Text>
          <ul
            style={{
              display: 'flex',
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '12px',
              color: '#333333',
              lineHeight: '4px',
              gap: '0px 5px'
            }}
          >
            <li>
              <a
                href={`${process.env.NEXT_PUBLIC_URL}`}
                style={{ textDecoration: 'underline' }}
              >
                Email Settings
              </a>
            </li>
            <li>·</li>
            <li>
              <a
                href={`${process.env.NEXT_PUBLIC_URL}`}
                style={{ textDecoration: 'underline' }}
              >
                Careers
              </a>
            </li>
            <li>·</li>
            <li>
              <a
                href={`${process.env.NEXT_PUBLIC_URL}`}
                style={{ textDecoration: 'underline' }}
              >
                Help Center
              </a>
            </li>
            <li>·</li>
            <li>
              <a
                href={`${process.env.NEXT_PUBLIC_URL}`}
                style={{ textDecoration: 'underline' }}
              >
                Privacy Policy
              </a>
            </li>
            <li>·</li>
            <li>
              <a
                href={`${process.env.NEXT_PUBLIC_URL}`}
                style={{ textDecoration: 'underline' }}
              >
                Terms of service
              </a>
            </li>
          </ul>
        </Section>
      </Container>
    </Html>
  );
};

export default EmailTemplate;
