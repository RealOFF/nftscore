import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { themeSwitcher } from '@nftscore/uikit';

import { Layout } from '../components/layout';
import './styles.css';

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    (window as any).themeSwitcher = themeSwitcher;
    themeSwitcher.init();
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
