import type { AppProps } from 'next/app';
import type NextPageWithLayout from '@/components/types/NextPageWithLayout';
import { SessionProvider } from "next-auth/react";
import '../styles/globals.css';

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
};

const MyApp = ({
  Component,
  pageProps: { session, ...pageProps }
}: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <SessionProvider session={session}>
      {getLayout(<Component {...pageProps} />)}
    </SessionProvider>
  );
};

export default MyApp;
