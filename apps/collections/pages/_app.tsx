import type { AppProps } from 'next/app';
// import { GlobalStyles } from 'twin.macro'

import { Layout } from '../components/layout';
import './styles.css';

const App = ({ Component, pageProps }: AppProps) => (
  <Layout>
    {/* <GlobalStyles /> */}
    <Component {...pageProps} />
  </Layout>
);

export default App;
