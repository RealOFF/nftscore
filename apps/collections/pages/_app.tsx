import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { themeSwitcher } from '@nftscore/uikit';
// import { GlobalStyles } from 'twin.macro'

import { Layout } from '../components/layout';
import './styles.css';

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    (window as any).themeSwitcher = themeSwitcher;
    themeSwitcher.init();
  }, []);
  return (
    <Layout>
      {/* <GlobalStyles /> */}
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
