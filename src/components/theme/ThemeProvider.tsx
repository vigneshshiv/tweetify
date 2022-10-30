/**
 * Theme Provider
 */
import Script from 'next/script';

const ThemeProvider = (): JSX.Element => {
  return (
    // eslint-disable-next-line @next/next/no-before-interactive-script-outside-document
    <Script
      id='tweetify-theme'
      strategy='beforeInteractive'
      dangerouslySetInnerHTML={{
        __html: `
          JSON.parse(localStorage.getItem('darkMode'))
            ? document.documentElement.classList.add('dark')
            : document.documentElement.classList.remove('dark');
          `,
      }}
    />
  );
}

export default ThemeProvider;