import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Roboto } from 'next/font/google';
import { NextIntlProvider } from 'next-intl';

const inter = Roboto({ weight: ['400', '700'], subsets: ['latin'] });

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <NextIntlProvider messages={pageProps.messages}>
      <div className={inter.className}>
        <Component {...pageProps} />
      </div>
    </NextIntlProvider>
  );
};

export default App;
