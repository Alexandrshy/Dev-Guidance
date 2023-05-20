import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Roboto } from 'next/font/google';

const inter = Roboto({ weight: ['400', '700'], subsets: ['latin'] });

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <div className={inter.className}>
      <Component {...pageProps} />
    </div>
  );
};

export default App;
