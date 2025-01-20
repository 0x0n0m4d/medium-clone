import {
  Button,
  Container,
  Heading,
  Hr,
  Html,
  Section,
  Text
} from '@react-email/components';

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
        flexDirection: 'column'
      }}
    >
      <Container
        align="center"
        style={{
          minWidth: '700px',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          padding: '20px 24px'
        }}
      >
        <Section
          align="center"
          style={{
            display: 'flex',
            padding: '0px 50px'
          }}
        >
          <img
            src="https://ci3.googleusercontent.com/meips/ADKq_NaV-wYo62Iy-VQk6N2iuSvGM0S22O2ZGkgmsspgV7HYoT523VWAKeD0VajVrtldsb8TuzzL-VbTZ-XuQh6uJ3bs7j7FZTkEre8fd2x6-qwmZCuOw9uAcvsYmmiT=s0-d-e1-ft#https://cdn-images-1.medium.com/proxy/1*1p2ITOyu0USn8aiamoqKJA@2x.jpeg"
            alt="Medium logo"
            style={{ height: '91px', width: '121px' }}
          />
        </Section>
        <Section
          align="center"
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginTop: '50px',
            padding: '0px 50px'
          }}
        >
          <Heading
            as="h1"
            style={{
              fontFamily: 'Georgia',
              fontSize: '28px',
              textAlign: 'start',
              color: '#333333',
              letterSpacing: '2px',
              WebkitTextStroke: '1px white'
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
              backgroundColor: '#1A8917',
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
            <a
              href={url}
              style={{ textDecoration: 'underline', color: '#333333' }}
            >
              {url}
            </a>
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
          align="center"
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            minWidth: '556px',
            textAlign: 'center',
            padding: '0px 50px'
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
              style={{ textDecoration: 'underline', color: '#333333' }}
            >
              Medium
            </a>{' '}
            · Medium, 548 Market St, PMB 42061, San Francisco, CA 94104
          </Text>
          <div
            style={{
              display: 'flex',
              textAlign: 'center',
              fontSize: '12px',
              lineHeight: '4px',
              padding: '0px 50px'
            }}
          >
            <a
              href={`${process.env.NEXT_PUBLIC_URL}`}
              style={{ textDecoration: 'underline', color: '#333333' }}
            >
              Email Settings
            </a>
            <span style={{ margin: '0px 4px' }}>·</span>
            <a
              href={`${process.env.NEXT_PUBLIC_URL}`}
              style={{ textDecoration: 'underline', color: '#333333' }}
            >
              Careers
            </a>
            <span style={{ margin: '0px 4px' }}>·</span>
            <a
              href={`${process.env.NEXT_PUBLIC_URL}`}
              style={{ textDecoration: 'underline', color: '#333333' }}
            >
              Help Center
            </a>
            <span style={{ margin: '0px 4px' }}>·</span>
            <a
              href={`${process.env.NEXT_PUBLIC_URL}`}
              style={{ textDecoration: 'underline', color: '#333333' }}
            >
              Privacy Policy
            </a>
            <span style={{ margin: '0px 4px' }}>·</span>
            <a
              href={`${process.env.NEXT_PUBLIC_URL}`}
              style={{ textDecoration: 'underline', color: '#333333' }}
            >
              Terms of service
            </a>
          </div>
        </Section>
      </Container>
    </Html>
  );
};

export default EmailTemplate;
