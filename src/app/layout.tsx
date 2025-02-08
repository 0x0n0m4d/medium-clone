'use client';

import '@fortawesome/fontawesome-free/css/all.min.css';
import './globals.css';
import { Provider } from 'react-redux';
import App from '@/components/App';
import store from '@/redux/store';

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider store={store}>
      <App>{children}</App>
    </Provider>
  );
}
