import type { Metadata } from 'next';
import './globals.css';
import Header from '../components/Header';

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
      <body className="global-font">
        <Header />
        {children}
      </body>
    </html>
  );
}
