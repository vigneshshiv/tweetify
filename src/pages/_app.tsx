// Next / React
import type { AppProps } from 'next/app'
// Application
import TitleAndMetaTags from 'components/layout/TitleAndMetaTags';
import ThemeProvider from 'components/theme/ThemeProvider';
// CSS
import '../styles/globals.css'

const Tweetify = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <TitleAndMetaTags />
      <ThemeProvider />
      <Component {...pageProps} />
    </>
  );
}

export default Tweetify;
