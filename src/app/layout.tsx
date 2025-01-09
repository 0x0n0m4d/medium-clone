import Header from '../components/header/Header';
import type { Metadata } from 'next';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './globals.css';

export const metadata: Metadata = {
  title: 'Medium: Read and write stories',
  description:
    'On Medium, anyone can share insightful perspectives, useful knowledge, and life wisdom with the world.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
